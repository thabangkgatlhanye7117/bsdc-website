import React, {useEffect, useRef} from 'react';

const IntroVideo = ({onEnd}) => {
  const videoRef = useRef(null);

  useEffect(()=>{
    const video = videoRef.current;

     if (video){
    video.play();

    const timer = setTimeout(()=>{
      video.pause();
      onEnd(); //show main layout
    }, 5000);

    return()=> clearTimeout(timer);

  }
}, [onEnd]);

  return(
    <video
      ref={videoRef}
      src='/bullasoft-intro.mp4'
      autoPlay
      muted
      preload='auto'
      className='intro-video'
    />
  );
};

export default IntroVideo;


 