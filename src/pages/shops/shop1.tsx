import DetailHeader from '@/components/DetailHeader';
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useRouter } from "next/router";

const Shop1 = () => {
  const router = useRouter();
  return (
    <>
    <DetailHeader/>
                <div className='flex justify-center m-2'>
                <div className='m-16'>
                      <Image 
                          alt='food'
                          src={'/food03.jpg'}
                          width = {800}
                          height = {1600}
                          />
                  </div>
                  <div className='m-16'>
                    <div className='m-2'>
                      <span className='text-blue-700 font-bold text-7xl'
                     
                      >
                        Lalha cafe&diner
                      </span>
                      <div className='m-2'>
                        <span className="text-1xl font-bold underline">
                            [大阪] 梅田駅 345m
                        </span>
                      </div>
                   
                    <div className='w-16 h-16 bg-yellow-400 text-lg  text-white font-semibold rounded-full hover:bg-yellow-200 flex justify-center items-center'>
                        Level3
                    </div>
                    </div>
                    <span className=''>
                      開放的な空間でハラルフードを堪能できる！
                    </span>
                    <div className=''>
                        <span className='font-bold text-3xl text-left text-red-700'>
                         3.08
                        </span>
                    </div>
                    <div className='bg-yellow-50  p-12'>   
                      <span className='text-1xl text-center'>
                          居心地のいい空間。
                          ランチに是非ご来店お待ちしております。
                      </span>
                    </div>
                  </div>
                
              </div>
                
    </>
  )
}

export default Shop1