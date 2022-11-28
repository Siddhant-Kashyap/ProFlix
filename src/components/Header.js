
import React from 'react'
import Logo from '../Assets/Logo.png'

const Head = () => {
  return (
    <>
   <div className='container'>
    <div style={{backgroundColor:'#1b0b54',display:'flex',justifyContent:'center'}}>
        <img style={{height:"50px",width:"150px",padding:'0.5rem'}} src={Logo}/>
    </div>    
    </div>
    
    </>
  )
}

export default Head