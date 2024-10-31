import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import ReactPlayer from 'react-player';

const Vemeo = () => {
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);
  const vimeoVideos = [
    {
      "id": 1,
      "name": "Sample Video 1",
      "pictures": {
        "sizes": [
          {
            "link": "https://vimeo.com/772986559"
          }
        ]
      }
    },
    {
      "id": 2,
      "name": "Sample Video 2",
      "pictures": {
        "sizes": [
          {
            "link": "https://vimeo.com/772986559"
          }
        ]
      }
    }
  ]

  const handleThumbnailClick = (url) => {
    setCurrentVideo(url);
    console.log("current video  ", currentVideo)
    // Request fullscreen for the player element
    if (playerRef.current) {
      playerRef.current.wrapper.requestFullscreen();
    }
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
    document.exitFullscreen(); // Exit fullscreen when the video is closed
  };




  // return (
  //   <div>
  //     <ReactPlayer
  //       url="https://vimeo.com/772986559"
  //       playing={true}
  //       controls={true}
  //       volume={1}
  //       width="100%"
  //       height="100%"
  //     />
  //   </div>
  // );

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {vimeoVideos.map(video => (
          <div key={video.id} onClick={() => handleThumbnailClick(video.pictures.sizes.link)} style={{ cursor: 'pointer' }}>
            {/* <img src={video.pictures.sizes.link} alt={video.name} style={{ width: '150px', height: 'auto' }} /> */}
            <ReactPlayer 
              url={video.pictures.sizes[0].link}
              playing={true}
              controls={false}
              loop={true}
              onClick={() => handleThumbnailClick(video.pictures.sizes.link)}
            />
            <p>{video.name}</p>
          </div>
        ))}
      </div>

      {currentVideo && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black' }}>
          <button onClick={handleCloseVideo} style={{ color: 'white', position: 'absolute', top: '20px', right: '20px' }}>
            Close
          </button>
          <ReactPlayer
            url={currentVideo}
            playing={isPlaying}
            controls={true}
            volume={1}
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
}

export default Vemeo
