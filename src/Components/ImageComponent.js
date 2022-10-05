import React from 'react'
import logo from '../Assets/image1.png'
import '../globalStyles/ImageComponent.css'

const ImageComponent = () => {
  return (
	<div className='imageComp'>
	  
	  <img src={logo} alt="eventimage" className='image-comp' />

	 </div>
  )
}

export default ImageComponent