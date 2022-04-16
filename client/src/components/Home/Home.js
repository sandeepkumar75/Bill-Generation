import React from 'react'
import styles from './Home.module.css'

const Home = () => {
   
    return (
        <div className={styles.pageContainer}>
            
            <section className={styles.hero}>
                <h1>Simpler way to generate Invoice for small businesses</h1>
                <div className={styles.paragraph}>
                   
                    {/* <p>Free and Open Source Invoicing application made with MongoDB, Express, React & Nodejs</p> */}
                </div>
                <div className={styles.imgContainer}>
                    <img src="https://res.cloudinary.com/dbnux4mlv/image/upload/v1644081813/Invoice_Img_nr7k5t.png" alt="invoicing-app"/>
                </div>
            </section>
        </div>
    )
}

export default Home
