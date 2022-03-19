import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  const Click = () => console.log("Clicked")


  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.headerElement}>
          <p>Mon-Thu: 9:00 AM - 5.30 PM</p>

        </div>
        <div className={styles.headerElement}>
          <p>Visit our showroom in 1234 Street Adress City Address, 1234  <a onClick={Click} className={styles.contactMe}>Contact Us</a></p>
        </div>
        <div className={styles.headerElement}>
          <p>Call Us: (00) 1234 5678</p>
        </div>
      </div>
    </div>
  )
}

export default Header