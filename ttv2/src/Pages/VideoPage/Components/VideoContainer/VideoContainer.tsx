import VideoContainerStyle from "./style/VideoContainer.module.css";
import { VideoContainerInterface } from "../../../../interfaces/interfaces";
const VideoContainer: React.FC<VideoContainerInterface> = ({
  videoInfo,
  videoAuthor,
}) => {
  return (
    <div className={VideoContainerStyle.videoContainer}>
      <div className={VideoContainerStyle.videoPlayer}>
        <video
          src={videoInfo.videoSource}
          controls={true}
          loop={true}
          autoPlay={true}
        />
      </div>
      <div className={VideoContainerStyle.videoDetails}>
        <h2>{videoInfo.videoDescription}</h2>
        <p>Tags: {videoInfo.videoTags.join(", ")}</p>
        <div className={VideoContainerStyle.videoAuthor}>
          <img
            src={videoAuthor.videoAuthorAvatar}
            alt={`${videoAuthor.videoAuthorUsername}'s avatar`}
          />
          <p>{videoAuthor.videoAuthorUsername}</p>
        </div>
      </div>
    </div>
  );
};
export default VideoContainer;
