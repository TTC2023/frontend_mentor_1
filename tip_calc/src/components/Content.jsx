import React, { useState } from 'react'
import styles from '../components/Content.module.css'
import dollar from '../assets/icon-dollar.svg'

const Content = () => {

    const [bill, setBill] = useState(0)

    const handleBillChange = (event) => {
        setBill(event.target.value);
    }

    return (
        <div className={styles.content}>
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <label className={styles.label} htmlFor="bill">Bill</label>
                    <div className={styles.billForm}>
                        <img className={styles.billSymbol} src={dollar} alt="dollar sign" />
                        <input className={styles.billInput} type="text" onChange={handleBillChange} />
                    </div>
                </div>
                <div >
                    <label className={styles.label} htmlFor="tip">Select Tip %</label>
                    <div className={styles.buttonContainer}>
                        <input className={styles.button} type="button" placeholder='5%' />
                        <input className={styles.button} type="button" placeholder='10%' />
                        <input className={styles.button} type="button" placeholder='15%' />
                        <input className={styles.button} type="button" placeholder='25%' />
                        <input className={styles.button} type="button" placeholder='50%' />
                        <input className={styles.button} type="number" placeholder='' />
                    </div>
                </div>
                <div className={styles.inputs}>
                    <label className={styles.label} htmlFor="People">Number of People</label>
                    <input type="text" />
                </div>
            </form>
            <div className={styles.display}>
                <div>
                    <div>
                        <h3>Tip Amount</h3>
                        <p>/ person</p>
                    </div>
                    <h2>{bill}</h2>
                </div>
                <div>
                    <div>
                        <h3>Total</h3>
                        <p>/ person</p>
                    </div>
                    <h2>Total</h2>
                </div>
                <button>Reset</button>
            </div>
        </div>
    )
}

export default Content