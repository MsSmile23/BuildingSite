import ReactPlayer from 'react-player';
import './VideoBlog.css';

export default function VideoBlog() {
  return (
    <>
    <div id="video-container">
    <ReactPlayer url='https://youtu.be/ApszdexkvYM'
                 width='100%'
                 hight='100%'
                 playing
                 muted
    />
    </div>
    </>
  )
}
