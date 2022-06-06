export default function TextButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-qrBlue hover:bg-qrBlue-light text-white font-bold py-2 px-4 rounded-full"
    >
      {children}
    </button>
  );
}
