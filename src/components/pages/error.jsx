import React from 'react'
import notFound from '../../assets/images/404.png'

function error() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <img src={notFound} alt="" style={{
        width: '80%',
        height: '80%',
        objectFit: 'fill'
      }} />
    </div>
  )
}

export default error
