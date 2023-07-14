import { useState } from 'react'
import styles from './Reply.module.css'
import minus from '../assets/icon-minus.svg'
import plus from '../assets/icon-plus.svg'
import replyIcon from '../assets/icon-reply.svg'
import deleteIcon from '../assets/icon-delete.svg'
import data from '../data.json'


const Reply = ({ reply }) => {

    const [popUp, setPopUp] = useState(false)

    const avatar = process.env.PUBLIC_URL + reply.user.image.png;
    console.log("data", data.currentUser.username)
    console.log("reply", reply.username)

    const handleDelete = () => {
        setPopUp(true)
    }

    return (
        <div className={styles.replyContainer}>
            {popUp ?
                <div className={styles.popup}>
                    <h2>Delete Comment</h2>
                    <p>Are you sure you want to delete this comment? This will remove the comment and cannot be undone</p>
                    <div className={styles.popupButtons}>
                      <button className={styles.cancel}>Cancel</button>
                      <button className={styles.deleteButton}>Delete</button>
                    </div>
                </div>
                :
                <>
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
                            <div className={styles.content}>
                                <img className={styles.avatar} src={avatar} alt="avatar" />
                                <p>{reply.createdAt}</p>
                                <div className={styles.reply}>
                                    {reply.user.username === data.currentUser.username ?
                                        <img onClick={handleDelete} className={styles.delete} src={deleteIcon} alt='delete' />
                                        : null}
                                    <img src={replyIcon} alt="reply" />
                                    <button>Reply</button>
                                </div>
                            </div>
                            <div>
                                <p>{reply.content}</p>
                            </div>
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default Reply
