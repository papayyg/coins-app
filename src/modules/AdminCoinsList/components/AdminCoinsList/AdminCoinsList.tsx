import React from 'react'
import styles from './AdminCoinsList.module.scss'
import { CoinCard } from '../../../../components'

const AdminCoinsList: React.FC = () => {
  return (
    <div className={styles.container}>
        <CoinCard />
        
    </div>
  )
}

export default AdminCoinsList