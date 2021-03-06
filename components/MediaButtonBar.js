import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButtonSquare from "@components/IconButtonSquare";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";

export default function MediaButtonBar({ onUploadImage, onUploadText }) {
  function logToConsole(text) {
    console.log(text);
  }
  return (
    <div className="flex flex-row w-full space-x-1 justify-center">
      <IconButtonSquare
        onClick={onUploadText}
        icon={faMessage}
        available={true}
      />
      <IconButtonSquare
        onClick={onUploadImage}
        icon={faImage}
        available={true}
      />
      <div className="opacity-40 space-x-1">
        <IconButtonSquare
          onClick={() => logToConsole("Upload Song")}
          icon={faSpotify}
          available={false}
        />
        <IconButtonSquare
          onClick={() => logToConsole("Choose Video")}
          icon={faVideo}
          available={false}
        />
        {/* GIF button needs to be custom made as there is no free icon*/}
        <button
          onClick={() => logToConsole("Choose GIF")}
          className="rounded-lg border-2 border-qrBlue w-12 h-12
  active:bg-neutral-50/50 select-none"
        >
          <p className="font-bold text-xl text-qrBlue pb-1">GIF</p>
        </button>
      </div>
    </div>
  );
}
