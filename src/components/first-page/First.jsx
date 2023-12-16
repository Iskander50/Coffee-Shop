import React from 'react'
import './first.css'
import order from'../../assets/back.png'
const First = () => {
  return (
    <div className='first'>


      <div className='image'>
<img src={order} alt="" />
      </div>
<div className='front'>
    <h1>Coffee so good,
your taste buds
will love it</h1>
    <p className='text'>The best grain, the finest roas, the most powerful flavor.</p>
<a className='btn' >Get started</a>
</div>

    </div>
  )
}

export default First