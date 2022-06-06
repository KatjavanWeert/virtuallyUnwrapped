import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({ icon, onClick, color = "white" }) {
  return (
    <button onClick={onClick} className="overflow-visible -w-14 h-14">
      <FontAwesomeIcon
        className="active:opacity-80 text-w"
        // style="color: white;"
        style={{ color: color }}
        icon={icon}
        transform="grow-30"
      />
    </button>
  );
}
