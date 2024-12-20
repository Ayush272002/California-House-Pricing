import { Home } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex items-center">
        <Home className="h-6 w-6 text-blue-600 mr-2" />
        <h1 className="text-xl font-semibold text-gray-800">
          California Housing Predictor
        </h1>
      </div>
    </header>
  );
}
