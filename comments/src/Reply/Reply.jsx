import React from 'react'
import styles from './Reply.module.css'
import minus from '../assets/icon-minus.svg'
import plus from '../assets/icon-plus.svg'


const Reply = ({ reply }) => {

  const avatar = process.env.PUBLIC_URL + reply.user.image.png;

  return (
    <div className={styles.replyContainer}>
      <div className={styles.line}>
        <div class={styles.vertical_line}></div>
      </div>
      <div className={styles.container}>
        <div className={styles.score}>
          <img src={plus} alt="plus" />
          <p>{reply.score}</p>
          <img src={minus} alt="minus" />
        </div>
        <div>
          <img src={avatar} alt="avatar" />
          <p>{reply.content}</p>
        </div>
      </div>
    </div>
  )
}

export default Reply