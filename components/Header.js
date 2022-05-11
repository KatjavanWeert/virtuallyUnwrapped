import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header({icon,title,subtitle}) { //title = properties
  return <div className='w-full'>
  <FontAwesomeIcon className="text-white" icon={icon} pull='left' transform="grow-10 down-10" />
  <h1 className="text-3xl font-bold text-white pl-7">
    {title}
    </h1>
    <h2 className="text-xl italic text-white pl-7">
      {subtitle}
      </h2>
    </div>
}
