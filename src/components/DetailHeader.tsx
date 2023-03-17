import styles from '@/styles/Page.module.css'
import Image from 'next/image'


const DetailHeader = () => {

  return (
    <div>
    <div className={styles['detail-page']}>
      <div className={styles['ulrdnavilist']}>
        <div className={styles['lirdnavitop']}>
          <span className={styles['text']}>
            <span>ホーム</span>
          </span>
        </div>
        <div className={styles['lirdnavitable']}>
          <span className={styles['text02']}>
            <span>ハラル認証</span>
          </span>
        </div>
        <div className={styles['lirdnavimenu']}>
          <div className={styles['a']}>
            <span className={styles['text04']}>
              <span className={styles['text05']}>メニュー </span>
            </span>
          </div>
        </div>
        <div className={styles['lirdnaviphoto']}>
          <div className={styles['a1']}>
            <span className={styles['text06']}>
              <span>画像</span>
            </span>
          </div>
        </div>
        <div className={styles['lirdnavireview']}>
          <div className={styles['a2']}>
            <span className={styles['text08']}>口コミ</span>
          </div>
        </div>
        <div className={styles['lirdnavicoupon']}>
          <div className={styles['a3']}>
            <span className={styles['text09']}>
              <span className={styles['text10']}>地図</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DetailHeader