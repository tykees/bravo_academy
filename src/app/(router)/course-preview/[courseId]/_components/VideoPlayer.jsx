import React from 'react'

function VideoPlayer({videoUrl, poster}) {
  return (
    <video 
    width={1000}
    height={250}
    controls
    className='rounded-sm'
    src={videoUrl} type='video/mp4'
    poster={poster}
    >
    </video>
  )
}

export default VideoPlayer