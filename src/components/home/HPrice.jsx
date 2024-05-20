import React from 'react'
import "../blog/blog.css"
import Header from '../common/heading/Header'
import PriceCard from '../price/PriceCard'

const HPrice = () => {
    return (
      <>
        <section className='hprice padding'>
          <Header subtitle='OUR PRICING' title='Pricing & Packages' />
          <div className='price container grid'>
            <PriceCard />
          </div>
        </section>
      </>
    )
}

export default HPrice
