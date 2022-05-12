import Header from '@components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@components/IconButton'
import PhotoFrame from '@components/PhotoFrame'
import MediaButtonBar from '@components/MediaButtonBar'

export default function GiverPage() {
    function logToConsole(text) {
        console.log(text)
    }

    return (
        <div className="relative h-screen w-full">
            <img src="/bg1.png" className="absolute object-bottom object-cover h-full w-full" />
            <div className="absolute w-full">

                <div className='flex flex-col w-full items-center space-y-6'>
                    <div className="px-2 pt-4 flex flex-row">
                        <Header icon={faEarthAmericas} title={"PUBLIC SPACE"} subtitle={"For every future gift recipient"} />
                    </div>
                    <IconButton icon={faPlusCircle} />
                    <PhotoFrame photo={'bg2.png'} />
                    <MediaButtonBar />
                    {/* <IconButtonSquare onClick={() => logToConsole("hey Frankyy")} icon={faImage}/> */}

                </div>
            </div>
        </div>
    )
}
