export default function Card({ children }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4">
      {children}
    </div>
  );
}