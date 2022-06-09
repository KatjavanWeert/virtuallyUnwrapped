import Header from "@components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import IconButton from "@components/IconButton";
import PhotoFrame from "@components/PhotoFrame";
import MediaButtonBar from "@components/MediaButtonBar";
import QRAnimation from "@components/QRAnimation";
import TextButton from "@components/TextButton";
import React, { useState, useRef, useEffect } from "react";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import OrbButton from "@components/OrbButton";

export default function GiverPersonalizationPage() {
  function toggleMediaUpload(orbNumber) {
    setShowMediaPanel(!showMediaPanel);
    setSelectedOrb(orbNumber);
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
  const [bgImg, setBgImg] = useState("/bg2.png");
  const [editMode, setEditMode] = useState(true);
  const [selectedOrb, setSelectedOrb] = useState(null);
  const [orb1, setOrb1] = useState(null);
  const [orb2, setOrb2] = useState(null);
  const [orb3, setOrb3] = useState(null);

  useEffect(() => {
    console.log(mediaType);
  }, [mediaType]);

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: "url(" + bgImg + ")" }}
    >
      <div className="absolute object-top px-6 pt-4 flex flex-row">
        <Header
          icon={faPenToSquare}
          title={"EDIT YOUR PAGE"}
          subtitle={"Click on the orbs and add media"}
        />
      </div>

      {/* UI Overlay */}
      <div className="absolute w-full top-[20%]">
        <div className="flex flex-col w-full items-center">
          {showMediaPanel == false && (
            <>
              <div className="fixed top-1/5">
                <OrbButton
                  editMode={editMode}
                  onClick={() => toggleMediaUpload("orb1")}
                ></OrbButton>
              </div>
              <div className="fixed top-1/4 right-8">
                <OrbButton
                  editMode={editMode}
                  onClick={() => toggleMediaUpload("orb2")}
                ></OrbButton>
              </div>
              <div className="fixed top-1/4 left-8">
                <OrbButton
                  editMode={editMode}
                  onClick={() => toggleMediaUpload("orb3")}
                ></OrbButton>
              </div>
            </>
          )}
          <div className="fixed top-1/2">
            <FontAwesomeIcon
              icon={faGift}
              transform={"grow-150"}
              color={"white"}
            ></FontAwesomeIcon>
          </div>
          {/* {showMediaPanel == false && (
            <IconButton
              icon={faPlusCircle}
              onClick={() => toggleMediaUpload()}
            />
          )} */}

          {showMediaPanel == true && (
            <>
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
                    color="#75acd3"
                  />
                  <IconButton
                    icon={faCircleCheck}
                    onClick={() => {
                      toggleMediaUpload();
                      saveCurrentMedia(mediaType);
                      resetAllMedia();
                    }}
                    color="#75acd3"
                  />
                </div>
              </div>
            </>
          )}
        </div>
        {showMediaPanel == false && (
          <div className="fixed bottom-10 right-10">
            <TextButton>Show preview</TextButton>
          </div>
        )}
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
