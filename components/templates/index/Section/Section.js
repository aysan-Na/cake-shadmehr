'use client'
import styles from './Section.module.css'
import Typewriter from 'typewriter-effect'
import {ChevronLeft} from "lucide-react";
import Link from 'next/link';

function Section() {
    return (
        <section className={styles.section}>
            <div className={styles.banner}>
                <div className={styles.top_banner}>
                    <Typewriter
                        onInit={typeWriter => {
                            typeWriter
                                .typeString(`<span> طعم خوب </span><spanx style="color:var(--color-brown);"> لحظه ها ! </spanx>`)
                                .start()
                                .pauseFor(2500)
                                .deleteAll()
                        }}
                        options={{
                            loop: true
                        }}
                    />
                </div> 
                <p className={styles.banner_p}>انتخاب شما، شیرینیِ مسیر ماست.</p>
                <div className={styles.banner_link}><Link href="#"> مشاهده محصولات </Link></div>
              
                <img src="/img/section.png" />
            </div>
        </section>

    )
}

export default Section