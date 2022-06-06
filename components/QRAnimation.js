export default function QRAnimation() {
  return (
    <div>
      {/* <img
        src="/QR.png"
        className="object-center object-cover h-full w-full p-5"
      /> */}
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
