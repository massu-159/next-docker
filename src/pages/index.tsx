import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Home">
      <div className="xl:flex">
        <p className="flex items-center justify-center text-4xl">
          Welcome to Home
        </p>
        <div className="m-10">
          <Image src="/home-image.png" width={600} height={380} alt='homeImage'></Image>
        </div>
      </div>
    </Layout>
  )
}

export default Home
