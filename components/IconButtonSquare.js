import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function IconButtonSquare({icon}) { //title = properties
  return <button className="rounded-lg border-2 border-white w-12 h-12
  active:bg-neutral-50/50 select-none">
  <FontAwesomeIcon className="text-white" icon={icon} transform="grow-15" />
  </button>
}
