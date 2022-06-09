import { faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@components/IconButton";
import QRAnimation from "@components/QRAnimation";
import TextButton from "@components/TextButton";
import FloatingText from "@components/FloatingText";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function GiverIntroductionPage() {
  const [opacityQR, setOpacityQR] = useState("opacity-100");
  const [introStage, setIntroStage] = useState(0);
  const [giverName, setGiverName] = useState(null);
  const [receiverName, setReceiverName] = useState(null);

  function nextIntroStage() {
    setIntroStage(introStage + 1);
  }

  return (
    <div className="relative h-screen w-full">
      {/* QR Animation */}
      <div>
        <QRAnimation />
      </div>

      {/* <div className="absolute object-top px-6 pt-4 flex flex-row">
        <Header
          icon={faEarthAmericas}
          title={"VIRTUALLY UNWRAPPED"}
          subtitle={"Give a meaningful digital gift"}
        />
      </div> */}

      {/* UI Overlay */}
      <div className="absolute w-full pt-8">
        <div className="flex flex-col w-full items-center">
          {introStage == 0 && (
            <>
              <FloatingText>
                Hey you! So nice that you want to give a gift to someone! What
                is your name?
              </FloatingText>
              <textarea
                className="fixed bottom-20 h-10 align-middle bg-qrBlue opacity-80 text-center rounded-md shadow-md font-bold text-white text-xl"
                value={giverName}
                placeholder="Your name"
                onChange={(event) => {
                  setGiverName(event.target.value);
                }}
              />
            </>
          )}
          {introStage == 1 && (
            <>
              <FloatingText>Who do you want to give the gift to?</FloatingText>
              <textarea
                className="fixed bottom-20 h-10 align-middle bg-qrBlue opacity-80 text-center rounded-md shadow-md font-bold text-white text-xl"
                value={receiverName}
                placeholder="The receiver's name"
                onChange={(event) => {
                  setReceiverName(event.target.value);
                }}
              />
            </>
          )}
          {introStage == 2 && (
            <>
              <FloatingText>Ready to create your gift?</FloatingText>
              <div className="fixed bottom-20">
                <Link href="/giverSelectGift">
                  <TextButton>Let's make this gift special!</TextButton>
                </Link>
              </div>
            </>
          )}

          {introStage != 2 && (
            <div className="fixed bottom-10 right-14">
              <IconButton
                icon={faCircleChevronRight}
                onClick={nextIntroStage}
              />
            </div>
          )}
        </div>
      </div>
      {/* All hidden stuff */}
    </div>
  );
}
