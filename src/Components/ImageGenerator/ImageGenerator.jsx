import React from 'react'
import './ImageGenerator.css'
import default_image from '../Assets/default image.svg'

export const ImageGenerator = () => {
  return (
    <div className='ai-image-generator'>
      <div className="header">Ai image <span>generator</span></div>
      <div className='img-loading'></div>

    </div>
  )
}