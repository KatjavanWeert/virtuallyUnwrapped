export default function TextButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-qrBlue hover:bg-qrBlue-light text-white text-xl font-bold py-4 px-8 rounded-full"
    >
      {children}
    </button>
  );
}
