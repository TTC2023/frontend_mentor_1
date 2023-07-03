import React from 'react'
import styles from './Reply.module.css'


const Reply = ({reply}) => {

  const avatar = process.env.PUBLIC_URL + reply.user.image.png;

  return (
    <div className={styles.container}>
      <img src={avatar} alt="avatar" />
      <p>{reply.content}</p>
    </div>
  )
}

export default Reply