import React from 'react'
import "../globalStyles/AdsComponent.css"
import ButtonComponent from './ButtonComponent'

const AdsComponent = () => {
  return (
    <>
<div className='ads-one'>
	<div className='adsMainComponent'>
      <div className='adsContent'>
          <h2 className = "imagine-snapchat">
            Imagine  if <br /> <span className = "special-title">Snapchat</span> <br/> had events.
          </h2>
        </div>

      <div className='text-events'>
           <h5 className='event-words'>Easily host and share events with your friends<br /> across any social media.</h5>
      </div>
    
	</div>
  <div className = "button-event">
          <ButtonComponent />
  </div>
</div>
  </>
  )
}

export default AdsComponent