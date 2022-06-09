import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@components/IconButton";
import GiftButton from "@components/GiftButton";
import FloatingText from "@components/FloatingText";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function GiverIntroductionPage() {
  const [selectedGift, setSelectedGift] = useState(null);
  const [videoIsPlayed, setVideoIsPlayed] = useState(false);

  return (
    <div className="relative h-screen w-full">
      {videoIsPlayed == false && (
        <div className="bg-[url('/bg1.png')] bg-cover bg-center">
          <video
            autoPlay
            muted
            playsInline
            type="video/mp4"
            src="/QR explosion.mp4"
            className="absolute object-bottom object-cover h-full w-full"
            onEnded={() => setVideoIsPlayed(true)}
          />
        </div>
      )}

      {videoIsPlayed == true && (
        <div className="bg-[url('/bg2.png')] bg-cover bg-center">
          <div className="text-4xl text-qrBlue px-4 pt-10 text-center font-bold uppercase w-full">
            Select your gift
          </div>
          <div className="flex flex-col items-center gap-4 px-4 pt-10">
            <GiftButton>Giftcards</GiftButton>
            <GiftButton>Games</GiftButton>
            <GiftButton>Experiences</GiftButton>
            <GiftButton>Subscriptions</GiftButton>
            <GiftButton>Custom Digital Gift </GiftButton>
          </div>
          <div className="fixed bottom-10 right-10">
            <Link href={"/giverPersonalization"}>
              <IconButton icon={faCircleCheck} color={"#3982b5"}></IconButton>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
