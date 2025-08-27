import bgVideo from './assets/214500.mp4';
import './background.css';

function VideoBackground() {
    return (
        <div className="video-container">
            <video autoPlay loop muted className="background-video">
                <source src={bgVideo} type="video/mp4" />
            </video>
            <div className="overlay"></div>
        </div>
    );
}

export default VideoBackground;