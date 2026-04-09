import { useState } from "react";
import api from "../../services/api";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await api.post("/contact", form);

      setSuccess("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md">

      <h2 className="text-xl font-semibold mb-4 text-center">
        Contact Us
      </h2>

      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full border p-2 rounded mb-3"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full border p-2 rounded mb-3"
      />

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="w-full border p-2 rounded mb-3"
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-800"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && (
        <p className="text-green-600 text-sm mt-3 text-center">
          {success}
        </p>
      )}
    </div>
  );
}