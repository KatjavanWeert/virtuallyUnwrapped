import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import IconButtonRound from '@components/IconButtonRound'

export default function GiverPage() {
  return (
    <div className="relative h-screen w-full">
          <img src="/bg1.png" className="absolute object-bottom object-cover h-full w-full"/>
          <div className="absolute w-full">
              <div className="px-8 pt-4 flex flex-row">
              <Header icon={faEarthAmericas} title={"PUBLIC SPACE"} subtitle={"For every future gift recipient"}/>
              <IconButtonRound icon={faPlusCircle}/>
              </div>
        </div>
    </div>
  )
}
