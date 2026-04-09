import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">
        AI Health Companion
      </h1>
      <p className="mb-6 text-gray-600">
        Get instant AI-powered health insights
      </p>

      <Button onClick={() => navigate("/dashboard")}>
        Try Now
      </Button>
    </div>
  );
}