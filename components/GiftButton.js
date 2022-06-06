export default function GiftButton({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="bg-qrBlue hover:bg-qrBlue-light text-white font-bold text-xl py-6 px-4 rounded-md w-full"
    >
      {children}
    </button>
  );
}
