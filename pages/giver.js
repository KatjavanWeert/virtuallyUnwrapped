import Header from "@components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@components/IconButton";
import PhotoFrame from "@components/PhotoFrame";
import MediaButtonBar from "@components/MediaButtonBar";
import QRAnimation from "@components/QRAnimation";
import React, { useState, useRef } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function GiverPage() {
  function logToConsole(text) {
    console.log(text);
  }

  function toggleMediaUpload() {
    setShowMediaPanel(!showMediaPanel);
    showMediaPanel == true
      ? setOpacityQR("opacity-100")
      : setOpacityQR("opacity-60");
  }

  const [selectedImage, setSelectedImage] = useState("/bg2.png");
  const [showMediaPanel, setShowMediaPanel] = useState(false);
  const [opacityQR, setOpacityQR] = useState("opacity-100");
  const inputRef = useRef(null);

  return (
    <div className="relative h-screen w-full ">
      <img
        src="/bg1.png"
        className="absolute object-bottom object-cover h-full w-full"
      />
      <div className="absolute object-top px-6 pt-4 flex flex-row">
        <Header
          icon={faEarthAmericas}
          title={"PUBLIC SPACE"}
          subtitle={"For every future gift recipient"}
        />
      </div>
      <div
        className={
          "absolute bottom-[20%] w-full flex flex-col items-center space-y-6 " +
          opacityQR
        }
      >
        <QRAnimation />
      </div>
      <div className="absolute w-full top-[20%]">
        <div className="flex flex-col w-full items-center">
          {showMediaPanel == false && (
            <IconButton
              icon={faPlusCircle}
              onClick={() => toggleMediaUpload()}
            />
          )}
          {showMediaPanel == true && (
            <div className="pt-26 space-y-2">
              <MediaButtonBar onUploadImage={() => inputRef.current.click()} />
              <PhotoFrame photo={selectedImage} />
              <div className="flex flex-row w-full space-x-48 justify-center">
                <IconButton
                  icon={faTrashCan}
                  onClick={() => toggleMediaUpload()}
                />
                <IconButton
                  icon={faCircleCheck}
                  onClick={() => toggleMediaUpload()}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* All hidden stuff */}
      <input
        className="hidden"
        type="file"
        name="myImage"
        ref={inputRef}
        accept="image/*"
        onChange={(event) => {
          console.log(event.target.files[0]);
          const objectURL = URL.createObjectURL(event.target.files[0]);
          setSelectedImage(objectURL);
        }}
      />
    </div>
  );
}
