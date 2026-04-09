import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Card from "../ui/Card";
import api from "../../services/api";

export default function SymptomForm() {
  const [symptom, setSymptom] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async () => {
    // 🔴 Validation
    if (!symptom.trim()) {
      setError("Please enter a symptom");
      return;
    }

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const res = await api.post("/symptoms/analyze", {
        symptom,
      });

      setResult(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch result. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Input
        value={symptom}
        onChange={(e) => setSymptom(e.target.value)}
        placeholder="Enter your symptoms..."
      />

      <div className="mt-4">
        <Button onClick={handleSubmit}>
          {loading ? "Analyzing..." : "Analyze"}
        </Button>
      </div>

      {/* ❌ Error */}
      {error && (
        <p className="text-red-500 mt-2">{error}</p>
      )}

      {/* ⏳ Loading */}
      {loading && (
        <p className="text-gray-500 mt-2">Processing...</p>
      )}

      {/* ✅ Result */}
      {result && (
        <Card className="mt-4">
          <h3 className="font-bold">Possible Causes:</h3>
          <ul>
            {result.causes.map((c, i) => (
              <li key={i}>• {c}</li>
            ))}
          </ul>

          <h3 className="font-bold mt-2">Advice:</h3>
          <p>{result.advice}</p>
        </Card>
      )}
    </div>
  );
}