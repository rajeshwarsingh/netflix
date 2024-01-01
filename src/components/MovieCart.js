import React from 'react'
import { IMG_CDN } from '../utils/constants'

function MovieCart({posterPath}) {
  return (
    <div className='w-48 pr-4'>
    <img alt="Movie Card" src={`${IMG_CDN}${posterPath}`} />
    </div>
  )
}

export default MovieCart