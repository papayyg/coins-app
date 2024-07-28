import React from 'react'
import styles from './CoinCategory.module.scss'

interface CoinCategoryProps {
	title: string;
	img: string;
	link: string;
}

const CoinCategory: React.FC<CoinCategoryProps> = ({title, img, link}) => {
  return (
	<div className={styles.category}>
		<h3 className={styles.categoryTitle}>{title}</h3>
		<a href={link} className={styles.categoryMore}>Show all</a>
		<div className={styles.categoryImg}>
			<img src={img} alt="coin" />
		</div>
	</div>
  )
}

export default CoinCategory