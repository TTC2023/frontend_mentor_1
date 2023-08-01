import React, { useState } from 'react'
import styles from './Content.module.css'
import star from '../../src/assets/icon-star.svg'
import illustration from '../../src/assets/illustration-thank-you.svg'

const Content = () => {

    const [submitted, setSubmitted] = useState(false)
    const [selected, setSelected] = useState(0)

    const handleSelected = (selected) =>{
        setSelected(selected)
        console.log(selected)
    }

    const handleSubmit = () => {
        if(selected < 1){
            setSubmitted(false)
        } else {
            setSubmitted(true)
        }
    }

    return (
        <div className={styles.content}>
            {submitted ? 
            <div className={styles.thanks}>
                <img className={styles.illustration} src={illustration} alt='pic'/>
                <div className={styles.outOf}>
                    <p>You selected {selected} out of 5</p>
                </div>
                <div className={styles.thankYou}>
                    <h1 className={styles.h1}>Thank you!</h1>
                    <p className={styles.p}>We appreciate you taking the time to give a rating. If you ever need more support don't hesitate to get in touch!</p>
                </div>
            </div>
            :
            <div>
                <div className={styles.starBG}>
                    <div>
                        <img className={styles.star} src={star} alt="star" />
                    </div>
                </div>
                <div className={styles.words}>
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                </div>
                <div className={styles.rate}>
                    <button onClick={()=>handleSelected(1)} className={selected ? styles.selected : styles.rateButton}>1</button>
                    <button onClick={()=>handleSelected(2)} className={selected >= 2 ? styles.selected : styles.rateButton}>2</button>
                    <button onClick={()=>handleSelected(3)} className={selected >= 3 ? styles.selected : styles.rateButton}>3</button>
                    <button onClick={()=>handleSelected(4)} className={selected >= 4 ? styles.selected : styles.rateButton}>4</button>
                    <button onClick={()=>handleSelected(5)} className={selected >= 5 ? styles.selected : styles.rateButton}>5</button>
                </div>
                <button onClick={handleSubmit} className={styles.submit}>Submit</button>
            </div>
            }
        </div>
    )
}

export default Content