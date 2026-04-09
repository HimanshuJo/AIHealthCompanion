export default function Input({ value, onChange, placeholder }) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
}