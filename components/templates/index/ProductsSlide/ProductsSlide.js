'use client'
import React from 'react'
import styles from './ProductsSlide.module.css'
import Slider from '../Slider/Slider';
import data from '@/app/data'
import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function ProductsSlide() {
  const [products,setProducts] = useState(data.products)
  console.log(products)

  return (
    <section className={styles.section_product}>
      <div className={styles.product_div}>
        <Swiper
          // pagination={{
          //   type: 'progressbar',
          // }}
          modules={[Autoplay, Pagination, Navigation]}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
        {products.map(product => (
           <SwiperSlide key={product.id}>
            <Slider {...product} />
          </SwiperSlide>
        ))}

        </Swiper>
      </div>
    </section>
  )
}

export default ProductsSlide