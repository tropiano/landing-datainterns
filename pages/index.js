import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Data Science Internships" />
        <p className="description">
          A curated list of the best data science internships
        </p>
        <script async data-uid="ee31cbaf50" src="https://tropianhs.ck.page/ee31cbaf50/index.js"></script>
      </main>

      <Footer />
    </div>
  )
}
