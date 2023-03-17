import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import { useRouter } from "next/router";

const ShopInfo = () => {
  const router = useRouter();
  return (
    <>
                <div className='flex justify-center m-2'>
                <div className='m-32'>
                      <Image 
                          alt='food'
                          src={'/food03.jpg'}
                          width = {400}
                          height = {800}
                          />
                  </div>
                  <div className='m-32'>
                    <div className='m-2'>
                      <span className='text-blue-700 font-bold text-3xl hover:text-blue-500 hover:underline '
                      onClick={() => router.push(`/shops/shop1`)}
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
                        <span className='font-bold text-2xl text-left'>
                         3.08
                        </span>
                    </div>
                    <div className='bg-yellow-50 '>   
                      <span className=''>
                          居心地のいい空間。
                          ランチに是非ご来店お待ちしております。
                      </span>
                    </div>
                  </div>
                
              </div>
                
    </>
  )
}

export default ShopInfo