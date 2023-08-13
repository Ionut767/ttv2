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
          disablePictureInPicture={true}
          controls={false}
          loop={true}
          autoPlay={true}
        />
      </div>
      <div className={VideoContainerStyle.videoDetails}>
        <div className={VideoContainerStyle.videoAuthor}>
          <img
            src={videoAuthor.videoAuthorAvatar}
            alt={`${videoAuthor.videoAuthorUsername}'s avatar`}
          />
        </div>
        <div className={VideoContainerStyle.VideoInfos}>
          <p className={VideoContainerStyle.username}>
            {videoAuthor.videoAuthorUsername}
          </p>
          <p className={VideoContainerStyle.description}>
            {videoInfo.videoDescription}
          </p>
          <p className={VideoContainerStyle.tags}>
            Tags: {videoInfo.videoTags.join(", ")}
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
