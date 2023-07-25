import React, { useState } from 'react'
import styles from '../components/Content.module.css'

const Content = () => {

    const [bill, setBill] = useState()

    const handleBillChange = (event) => {
        setBill(event.target.value);
    }

    return (
        <div className={styles.content}>
            <form className={styles.form}>
                <div className={styles.inputs}>
                    <label className={styles.label} htmlFor="bill">Bill</label>
                    <input type="text" onChange={handleBillChange}/>
                </div>
                <div className={styles.inputs}>
                    <label className={styles.label} htmlFor="tip">Select Tip %</label>
                    <input type="button" placeholder='5%' />
                    <input type="button" placeholder='10%' />
                    <input type="button" placeholder='15%' />
                    <input type="button" placeholder='25%' />
                    <input type="button" placeholder='50%' />
                    <input type="number" placeholder='' />
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