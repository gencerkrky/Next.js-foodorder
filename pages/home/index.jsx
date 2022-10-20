import React from 'react'
import Customers from '../../components/customers/Customers'
import MenuWrapper from '../../components/products/MenuWrapper'
import About from '../../components/ui/About'
import Campaigns from '../../components/ui/Campaigns'
import Carousel from '../../components/ui/Carousel'
import Reservation from '../../components/ui/Reservation'

const index = () => {
  return (
    <React.Fragment>
      <Carousel />
      <Campaigns />
      <MenuWrapper />
      <About />
      <Reservation/>
      <Customers/>
    </React.Fragment>
  )
}

export default index