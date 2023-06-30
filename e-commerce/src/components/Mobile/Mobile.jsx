import React from 'react'
import styles from './Mobile.module.css'
import NavBar from '../NavBar/NavBar'
import image from '../../assets/image-product-1.jpg'
import Content from '../Content/Content'

const Mobile = () => {
  return (
    <div className={styles.mobile}>
      <NavBar className={styles.navBar}/>
      <img className={styles.image} src={image} alt="image" />
      <Content className={styles.content}/>
    </div>
  )
}

export default Mobile