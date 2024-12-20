"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PredictionFormProps {
  onPredictionResult: (result: number) => void;
}

const formFields = [
  { name: "MedInc", label: "Median Income" },
  { name: "HouseAge", label: "House Age" },
  { name: "AveRooms", label: "Average Rooms" },
  { name: "AveBedrms", label: "Average Bedrooms" },
  { name: "Population", label: "Population" },
  { name: "AveOccup", label: "Average Occupancy" },
  { name: "Latitude", label: "Latitude" },
  { name: "Longitude", label: "Longitude" },
];

export default function PredictionForm({
  onPredictionResult,
}: PredictionFormProps) {
  const [formData, setFormData] = useState<Record<string, string>>(
    Object.fromEntries(formFields.map((field) => [field.name, ""]))
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      onPredictionResult(result);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {formFields.map((field, index) => (
          <motion.div
            key={field.name}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Label
              htmlFor={field.name}
              className="text-sm font-medium text-gray-700"
            >
              {field.label}
            </Label>
            <Input
              type="number"
              step="any"
              name={field.name}
              id={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="mt-1"
              placeholder={`Enter ${field.label.toLowerCase()}`}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Predicting..." : "Predict House Price"}
        </Button>
      </motion.div>
    </form>
  );
}
