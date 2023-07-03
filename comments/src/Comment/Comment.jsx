import React from 'react'
import styles from './Comment.module.css'
import minus from '../assets/icon-minus.svg'
import plus from '../assets/icon-plus.svg'
import reply from '../assets/icon-reply.svg'
import Reply from '../Reply/Reply'

const Comment = ({ comment }) => {
  
  const avatar = process.env.PUBLIC_URL + comment.user.image.png;
  
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.score}>
          <img src={plus} alt="plus" />
          <p>{comment.score}</p>
          <img src={minus} alt="minus" />
        </div>
        <div>
          <div className={styles.content}>
            <img className={styles.avatar} src={avatar} alt="avatar" />
            <p>{comment.createdAt}</p>
            <div className={styles.reply}>
              <img src={reply} alt="reply" />
              <button>Reply</button>
            </div>
          </div>
          <div>
            <p>{comment.content}</p>
          </div>
        </div>
      </div>
      {comment.replies && comment.replies.map(reply =>
        <Reply key={reply.id} reply={reply} />
      )}
    </div>
  )
}

export default Comment
