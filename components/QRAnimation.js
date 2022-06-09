export default function QRAnimation() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        controls
        playsInline
        type="video/mp4"
        src="/FloatingQR.mp4"
        className="absolute object-bottom object-cover h-full w-full"
      />
    </div>
  );
}
