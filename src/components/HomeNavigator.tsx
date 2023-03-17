import styles from '@/styles/Home.module.css'

const HomeNavigator = () => {
  return (
    
    <div className='flex-col'>
              <div className={styles['div05']}>
              <span className={styles['text02']}>halal food</span>
            </div>
            <div className={styles['ul']}>
              <div className={styles['li']}>
                <div className={styles['span']}>
                  <div className={styles['pseudo']}></div>
                  <span className={styles['text04']}>ランキング</span>
                </div>
              </div>
              <div className={styles['li1']}>
                <div className={styles['span1']}>
                  <div className={styles['pseudo1']}></div>
                  <span className={styles['text06']}>レベル別</span>
                </div>
              </div>
              <div className={styles['li2']}>
                <div className={styles['span2']}>
                  <div className={styles['pseudo2']}></div>
                  <span className={styles['text08']}>New</span>
                </div>
              </div>
            </div>
    </div>

  )
}

export default HomeNavigator