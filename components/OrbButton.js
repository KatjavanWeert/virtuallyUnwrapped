import { faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function OrbButton({ onClick, editMode, className }) {
  return (
    <button className="relative w-20 h-20" onClick={onClick}>
      <img
        src="Orb.gif"
        className={
          "w-full h-full object-contain opacity-60 active:scale-125 " +
          (className ?? className)
        }
      ></img>
      {editMode == true && (
        <FontAwesomeIcon
          className="absolute text-qrBlue top-2 right-2"
          icon={faPen}
          transform="grow-5"
        />
      )}
    </button>
  );
}
