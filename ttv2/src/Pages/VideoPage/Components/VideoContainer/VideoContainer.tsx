import VideoContainerStyle from "./style/VideoContainer.module.css";
import { VideoContainerInterface } from "../../../../interfaces/interfaces";
import { useState } from "react";
const VideoContainer: React.FC<VideoContainerInterface> = ({
  videoInfo,
  videoAuthor,
}) => {
  const [isVideoPlaying, setVideoPlaying] = useState<boolean>(true);
  const handleVideoClick = () => {
    const videoElement = document.querySelector("video");
    if (videoElement) {
      if (isVideoPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setVideoPlaying(!isVideoPlaying);
    }
  };

  return (
    <div className={VideoContainerStyle.videoContainer}>
      <div
        className={VideoContainerStyle.videoPlayer}
        onClick={handleVideoClick}>
        <video
          src={videoInfo.videoSource}
          disablePictureInPicture={true}
          controls={false}
          loop={true}
          autoPlay={isVideoPlaying}
        />
      </div>
      <div className={VideoContainerStyle.videoDetails}>
        <div className={VideoContainerStyle.videoAuthor}>
          <img
            src={videoAuthor.videoAuthorAvatar}
            alt={`${videoAuthor.videoAuthorUsername}'s avatar`}
          />
          <p className={VideoContainerStyle.username}>
            {videoAuthor.videoAuthorUsername}
          </p>
        </div>
        <div className={VideoContainerStyle.VideoInfos}>
          <p className={VideoContainerStyle.description}>
            {videoInfo.videoDescription}
          </p>
          <p className={VideoContainerStyle.tags}>
            {videoInfo.videoTags.join(", ")}
          </p>
          <div className={VideoContainerStyle.SongContainer}>
            <p>{videoInfo.videoSong.songName}</p>
            <img
              src={videoInfo.videoSong.songAvatar}
              alt={videoInfo.videoSong.songName}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default VideoContainer;
