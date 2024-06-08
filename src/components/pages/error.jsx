import React from 'react'
import notFound from '../../assets/images/404.png'

function error() {
  return (
    <div className="" style={{backgroundImage: `url(${notFound})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat', height:'100vh'}}>
    </div>
  )
}

export default error
