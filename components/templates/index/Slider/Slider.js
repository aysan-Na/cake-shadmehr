import React from 'react'
import styles from './Slider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

function Slider(product) {
    
    return (
        <SwiperSlide>
            <div className={styles.product_content}>
                <div className={styles.right_section}>
                    <div className={styles.product_desc}>
                        <span>یک انتخاب سالم ...</span>
                        <p className={styles.name}>{product.name}</p>
                        <div className={styles.flex_div}>
                            <div>اسفنجی و نرم</div>
                            <div>{product.taste}</div>
                            <div>{product.weight} گرم</div>
                        </div>
                        <Link href={product.link} className={styles.link}>مشاهده</Link>
                    </div>
                </div>
                <div className={styles.left_section}>
                    <img src={product.img} alt='' />
                </div>
            </div>
        </SwiperSlide>
    )
}

export default Slider