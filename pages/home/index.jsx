import React from 'react'
import MenuWrapper from '../../components/products/MenuWrapper'
import About from '../../components/ui/About'
import Campaigns from '../../components/ui/Campaigns'
import Carousel from '../../components/ui/Carousel'
import Reservation from '../../components/ui/Reservation'

const index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation/>
    </div>
  )
}

export default index