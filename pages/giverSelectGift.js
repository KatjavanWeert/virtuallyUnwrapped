import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@components/IconButton";
import QRAnimation from "@components/QRAnimation";
import GiftButton from "@components/GiftButton";
import FloatingText from "@components/FloatingText";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function GiverIntroductionPage() {
  const [selectedGift, setSelectedGift] = useState(null);

  return (
    <div className="relative h-screen w-full bg-[url('/bg2.png')] bg-cover bg-center">
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
  );
}
