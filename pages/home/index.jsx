import React from 'react'
import MenuWrapper from '../../components/products/MenuWrapper'
import Campaigns from '../../components/ui/Campaigns'
import Carousel from '../../components/ui/Carousel'

const index = () => {
  return (
    <div>
      <Carousel />
      <Campaigns />
      <MenuWrapper/>
    </div>
  )
}

export default index