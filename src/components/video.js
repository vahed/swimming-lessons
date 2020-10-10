import React from 'react';

const Video = () => {

    return (
        <header className="video-header">
            <video className="video-fluid" src={require("../images/video1.mp4")}
                   width="700" height="500"
                   autoPlay loop playsinline muted></video>
            <div className="viewport-header">
                <h1 className="v-h1">
                    Explore
                    <span>Gesschool</span>
                </h1>
            </div>
        </header>
    );
};

export default Video;