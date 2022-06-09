export default function QRExplosion() {
  return (
    <div>
      <video
        autoPlay
        muted
        playsInline
        type="video/mp4"
        src="/QR explosion.mp4"
        className="absolute object-bottom object-cover h-full w-full"
        onEnded={() => (this.style.display = "none")}
      />
    </div>
  );
}
