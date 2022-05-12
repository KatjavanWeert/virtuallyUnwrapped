import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function addMedia(){

}

export default function IconButton({icon}) { //title = properties
  return <button onClick={addMedia}>
  <FontAwesomeIcon className="text-white" icon={icon} transform="grow-30" />
  </button>
}