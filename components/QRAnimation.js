export default function QRAnimation() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        playsInline
        src="/FloatingQR.mp4"
        className="absolute object-bottom object-cover h-full w-full"
      />
    </div>
  );
}
