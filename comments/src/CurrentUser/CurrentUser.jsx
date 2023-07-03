import React from 'react'
import styles from './CurrentUser.module.css'


const CurrentUser = () => {

  const avatar = process.env.PUBLIC_URL + `./image-juliusomo.png`;

  return (
    <div className={styles.container}>
        <form method='POST' className={styles.form}>
            <img className={styles.img} src={avatar} alt='user image'/>
            <input className={styles.comment} type="text" placeholder='Add a comment'/>
            <input className={styles.button} type="submit" placeholder='SEND' />
        </form>
    </div>
  )
}

export default CurrentUser