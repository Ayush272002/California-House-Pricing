"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PredictionResultProps {
  prediction: number;
}

export default function PredictionResult({
  prediction,
}: PredictionResultProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8"
    >
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-green-800">
            Prediction Result
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold text-green-700">
            The predicted house price is: $
            {prediction.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
