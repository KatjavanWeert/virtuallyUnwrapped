import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButtonSquare({ icon, onClick, available }) {
  return (
    <button
      onClick={onClick}
      // className={
      //   "rounded-lg border-2 border-white w-12 h-12 active:bg-neutral-50/50 select-none " +
      //     !available && "opacity-60"
      // }
      className="rounded-lg border-2 border-qrBlue w-12 h-12 active:bg-qrBlue-light-50/50 select-none"
    >
      <FontAwesomeIcon
        className="text-qrBlue"
        icon={icon}
        transform="grow-15"
      />
    </button>
  );
}
