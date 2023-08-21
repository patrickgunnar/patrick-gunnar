'use client'

import styles from "./styles.module.css";


const ErrorWave = () => {
    // list items
    const listItems = []

    // create li elements
    for(let i = 0; i <= 25; i++) listItems.push(<li key={i}></li>)

    return (
        <div className={styles.error__wave}>
            <ul className={styles.error__list}>
                {listItems}
            </ul>
        </div>
    );
}
 
export default ErrorWave;
