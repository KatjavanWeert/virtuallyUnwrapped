export default function orbContent({ photo, active, orbNumber, children }) {
  return (
    <div className="relative h-80 w-80">
      <img
        src="/frame1.png"
        className="absolute object-center object-fill h-full w-full"
      />
      <img
        src={photo}
        className="absolute object-center object-cover overflow-hidden p-5 h-full w-full"
      />
      <img
        src="/frame2.png"
        className="absolute object-center object-fill h-full w-full"
      />
      {children}
    </div>
  );
}
