import React from 'react'
import AdsComponent from '../../Components/AdsComponent'
import ImageComponent from '../../Components/ImageComponent'
import "./LandingPage.css"


const LandingPage = () => {
  return (


		<div className = "mainBackground">

	          <div className = "mainImageContent">
				<ImageComponent/>
			 </div>
			 <div className = "mainImageAds">
				<AdsComponent />
			</div>
			 
            
         
		</div>

  )
}

export default LandingPage