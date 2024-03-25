import React from 'react'
import "./Video.css"
import Playvideo from '../../Components/Playvideo/Playvideo'
import Recomended from '../../Components/Recomended/Recomended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId, categoryId} = useParams()
  console.log(videoId)
  return (
    <div className='play-container'>
      <Playvideo videoId={videoId} categoryId={categoryId}/>
      <Recomended/>
    </div>
  )
}

export default Video