import Head from 'next/head'
import Image from 'next/image'

const Header = () => {
  return (
    <>
        <Head>
        <title>AL-wali</title>
        <meta name="description" content="Generated by takeru" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className='bg-red-600 h-16'>    
            <div className='justify-items-center'>
            <Image 
              alt='logo'
              src={'/logo.png'}
              width = {100}
              height = {100}
              />
            </div>
        </div>
    </>
  )
}

export default Header