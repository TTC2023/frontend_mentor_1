import {useState, useEffect} from 'react'
import styles from './NavBar.module.css'
import logo from '../../assets/logo.svg'
import cart from '../../assets/icon-cart.svg'
import avatar from '../../assets/image-avatar.png'
import menu from '../../assets/icon-menu.svg'


const NavBar = ({finalQuantity}) => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    handleResize();

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={styles.nav}>
      {isMobile ? (
        <>
          <div className={styles.left}>
          <img src={menu} alt="menu" />
            <img src={logo} alt="logo" />
          </div>
          <div className={styles.right}>
            <div><img src={cart} alt="cart"/>{finalQuantity}</div>
            <img className={styles.avatar} src={avatar} alt="avatar" />
          </div>
        </>
      ) : (
        <>
          <div className={styles.left}>
            <img src={logo} alt="logo" />
            <p>Collections</p>
            <p>Men</p>
            <p>Women</p>
            <p>About</p>
            <p>Contact</p>
          </div>
          <div className={styles.right}>
            <div><img src={cart} alt="cart"/>{finalQuantity}</div>
            <img className={styles.avatar} src={avatar} alt="avatar" />
          </div>
        </>
      )}
    </div>
  )
}

export default NavBar
