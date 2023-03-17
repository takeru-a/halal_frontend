import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HomeNavigator from '../components/HomeNavigator'
import ShopInfo from '../components/ShopInfo'
import { useRouter } from "next/router";
import { NextPage } from 'next'
import ShopInfo2 from '@/components/ShopInfo2'

const inter = Inter({ subsets: ['latin'] })

const Home:NextPage = () => {
  const router = useRouter();
  return (
    <>    
        <div>
          <HomeNavigator/>
            <div className='h-screen w-screen'>
            <ShopInfo/>
           <ShopInfo2/>
           
            </div>
        </div>
    </>
  )
}
export default Home;