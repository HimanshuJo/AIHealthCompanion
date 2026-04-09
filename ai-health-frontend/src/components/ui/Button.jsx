export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
    >
      {children}
    </button>
  );
}