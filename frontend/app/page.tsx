"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PredictionForm from "@/components/PredictionForm";
import PredictionResult from "@/components/PredictionResult";

export default function Home() {
  const [prediction, setPrediction] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-green-100 flex flex-col items-center justify-center p-4 sm:p-8">
      <motion.main
        className="w-full max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl sm:text-4xl font-bold text-center text-blue-800">
              California Housing Price Prediction
            </CardTitle>
            <CardDescription className="text-center text-gray-600">
              Enter the details below to get an estimated house price
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PredictionForm onPredictionResult={setPrediction} />
            {prediction !== null && (
              <PredictionResult prediction={prediction} />
            )}
          </CardContent>
        </Card>
      </motion.main>
    </div>
  );
}
