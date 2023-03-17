import styles from '@/styles/Home.module.css'
import Image from 'next/image'

const ShopInfo2 = () => {
  return (
    <>
                <div className='flex justify-center '>
                <div className='m-32'>
                      <Image 
                          alt='food'
                          src={'/food01.jpg'}
                          width = {400}
                          height = {800}
                          />
                  </div>
                  <div className='m-32'>
                    <div className='m-2'>
                      <span className='text-blue-700 font-bold text-3xl'>
                      JAMOM diner
                      </span>
                      <div className='m-2'>
                        <span className="text-1xl font-bold underline">
                        [大阪] 難波駅 100m
                        </span>
                      </div>
                   
                    <div className='w-16 h-16 bg-gray-300 text-lg  text-white font-semibold rounded-full hover:bg-gray-200 flex justify-center items-center'>
                        Level2
                    </div>
                    </div>
                    <span className=''>
                    最高においしいハラル料理を提供！
                    </span>
                    <div className=''>
                        <span className='font-bold text-2xl text-left'>
                         2.62
                        </span>
                    </div>
                    <div className='bg-yellow-50 '>   
                      <span className=''>
                      創業１０年！本物のハラルフードが味わえる！
                      </span>
                    </div>
                  </div>
                
              </div>
                
    </>
  )
}

export default ShopInfo2