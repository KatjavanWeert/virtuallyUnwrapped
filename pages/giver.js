import Header from '@components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import IconButton from '@components/IconButton'
import PhotoFrame from '@components/PhotoFrame'
import MediaButtonBar from '@components/MediaButtonBar'
import QRAnimation from '@components/QRAnimation'

export default function GiverPage() {
    function logToConsole(text) {
        console.log(text)
    }

    return (
        <div className="relative h-screen w-full">
            <img src="/bg1.png" className="absolute object-bottom object-cover h-full w-full" />
            <div className='absolute bottom-44 w-full flex flex-col items-center space-y-6'>
                <IconButton icon={faPlusCircle} />
                <QRAnimation />
            </div>
            <div className="absolute w-full">
                <div className='flex flex-col w-full items-center'>
                    <div className="px-2 pt-4 flex flex-row">
                        <Header icon={faEarthAmericas} title={"PUBLIC SPACE"} subtitle={"For every future gift recipient"} />
                    </div>
                    <div className="pt-36 space-y-2">
                        <PhotoFrame photo={'bg2.png'} />
                        <MediaButtonBar />
                    </div>
                </div>
            </div>
        </div>
    )
}
