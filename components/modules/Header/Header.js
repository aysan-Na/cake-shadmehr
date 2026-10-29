import React from 'react'
import styles from "./Header.module.css"
import Link from 'next/link'

function Header() {
    return (
        <header >
            <div className={styles.header_box}>

                <div className={styles.header}>
                    <div className={styles.middle_menu}>
                        <div className={styles.logo}>
                            <img src="/img/logo.png" />
                        </div>
                    </div>
                    <nav className={styles.navbar}>
                        <ul className={styles.navbar_ul}>
                            <li className={styles.navbar_li}>خانه</li><div className={styles.li_circle}></div>
                            <li className={styles.navbar_li}>محصولات</li><div className={styles.li_circle}></div>
                            <li className={styles.navbar_li}>مجله ها</li><div className={styles.li_circle}></div>
                            <li className={styles.navbar_li}><Link href="/کاتالوگ کیک شادمهر.pdf">کاتالوگ</Link></li><div className={styles.li_circle}></div>
                            <li className={styles.navbar_li}>درباره ما</li>
                        </ul>
                    </nav>
                    

                    <div className={styles.left_menu}>
                        <div>
                            <p className={styles.phone}>09336641903</p>
                            <p className={styles.phone_title}>پشتیبانی سریع</p>
                        </div>
                        <div className={styles.phone_icon}>
                            <img src="/img/phone.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header