import Header from "@components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@components/IconButton";
import PhotoFrame from "@components/PhotoFrame";
import MediaButtonBar from "@components/MediaButtonBar";
import QRAnimation from "@components/QRAnimation";
import TextButton from "@components/TextButton";
import React, { useState, useRef, useEffect } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function GiverPersonalizationPage() {
  function toggleMediaUpload() {
    setShowMediaPanel(!showMediaPanel);
    // showMediaPanel == true
    //   ? setOpacityQR("opacity-100")
    //   : setOpacityQR("opacity-60");
  }

  function saveCurrentMedia(currentMediaType) {
    switch (currentMediaType) {
      case "Text":
        console.log(textUpload);
        return;
      case "Image":
        console.log(imageUpload);
        return;
    }
  }

  function resetAllMedia() {
    setTextUpload("");
    setSelectedImage("/bg2.png");
    setImageUpload(null);
  }

  const [selectedImage, setSelectedImage] = useState("/bg2.png");
  const [showMediaPanel, setShowMediaPanel] = useState(false);
  const [mediaType, setMediaType] = useState(null);
  const [textUpload, setTextUpload] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const inputRef = useRef(null);
  const [bgImg, setBgImg] = useState("/bg1.png");

  useEffect(() => {
    console.log(mediaType);
  }, [mediaType]);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(" + bgImg + ")" }}
    >
      <div className="absolute object-top px-6 pt-4 flex flex-row">
        {/* <Header
          icon={faEarthAmericas}
          title={"PUBLIC SPACE"}
          subtitle={"For every future gift recipient"}
        /> */}
      </div>

      {/* UI Overlay */}
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
              <MediaButtonBar
                onUploadImage={() => {
                  setMediaType("Image");
                  inputRef.current.click();
                }}
                onUploadText={() => setMediaType("Text")}
              />
              <PhotoFrame photo={selectedImage}>
                {mediaType == "Text" && (
                  <textarea
                    className="absolute p-10 bg-transparent text-center w-80 h-80 font-bold text-qrBlue text-lg"
                    value={textUpload}
                    placeholder="Write your message here!"
                    onChange={(event) => {
                      setTextUpload(event.target.value);
                    }}
                  />
                )}
              </PhotoFrame>

              <div className="flex flex-row w-full space-x-48 justify-center">
                <IconButton
                  icon={faTrashCan}
                  onClick={() => {
                    toggleMediaUpload();
                    resetAllMedia();
                  }}
                />
                <IconButton
                  icon={faCircleCheck}
                  onClick={() => {
                    toggleMediaUpload();
                    saveCurrentMedia(mediaType);
                    resetAllMedia();
                  }}
                />
              </div>
            </div>
          )}
        </div>
        <div className="fixed bottom-10 right-10">
          <TextButton>Show preview</TextButton>
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
          setImageUpload(event.target.files[0]);
          const objectURL = URL.createObjectURL(event.target.files[0]);
          setSelectedImage(objectURL);
        }}
      />
    </div>
  );
}
