import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function IconButton({ icon, onClick }) {
  return (
    <button onClick={onClick}>
      <FontAwesomeIcon
        className="text-white active:opacity-80"
        icon={icon}
        transform="grow-30"
      />
    </button>
  );
}
