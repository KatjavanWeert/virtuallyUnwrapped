import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

export default function GiverPage() {
  return (
    <div className="relative h-screen w-full">
              <FontAwesomeIcon icon={faCoffee} />
              </div>
  )
}
