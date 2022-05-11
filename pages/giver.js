import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function GiverPage() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="This is the giver page!" subtitle="This is the subtitle :)" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
