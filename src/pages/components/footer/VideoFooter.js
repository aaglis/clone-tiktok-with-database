import React from 'react';
import './videoFooter.css';
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter({nameAccount, description, musicName}) {
  return (
    <div className='video-footer'>
      <div className='video-footer-text'>
        <h3>{nameAccount}</h3>
        <p>{description}</p>
        <div className='video-footer-music'>
          <MusicNoteIcon  className='video-footer-icon'/>
          <div className='video-footer-music-text'>
            <p>{musicName}</p>
          </div>

        </div>
      </div>

      <img 
        className='video-footer-record'
        alt='Imagem de um vinil girando'
        src='https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z'
      />
    </div>
  )
}

export default VideoFooter