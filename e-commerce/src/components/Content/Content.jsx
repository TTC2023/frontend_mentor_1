import React from 'react'
import styles from './Content.module.css'
import minus from '../../assets/icon-minus.svg'
import plus from '../../assets/icon-plus.svg'
import cart from '../../assets/icon-cart.svg'
import { useState, useEffect } from 'react'

const Content = ({setFinalQuantity, finalQuantity}) => {

  const [quantity, setQuantity] = useState(0)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const handleQuantity = (num) => {
    if(num === 1){
      if(quantity !== 0){
        setQuantity(quantity-1)
      }
    }
    if(num === 2){
      setQuantity(quantity+1)
    }
  }

  const handleCart = () => {
    setFinalQuantity(prevQuantity => prevQuantity + quantity)
    console.log(finalQuantity)
  }

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={isMobile ? styles.mobileContainer :styles.container}>
      <div className={styles.header}>
        <p>SNEAKER COMPANY</p>
        <h1>Fall Limited Sneakers</h1>
      </div>
      <p className={styles.description}>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole they'll withstand everything the weather can offer.</p>
      <h2 className={styles.price}>$125.00 <span className={styles.discount}>$50%</span></h2>
      <p className={styles.priceDiscount}>$250.00</p>
      <div className={styles.bottom}>
        <div className={styles.quantity}>
          <img className={styles.operation} onClick={()=>handleQuantity(1)} src={minus} alt="minus" />{quantity}<img className={styles.operation} onClick={()=>handleQuantity(2)} src={plus} alt='plus' />
        </div>
        <button onClick={handleCart}>
          <img className={styles.cart} src={cart} alt="cart" />Add to cart
        </button>
      </div>
    </div>
  )
}

export default Content