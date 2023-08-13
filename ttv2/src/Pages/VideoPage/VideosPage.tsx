import VideoContainer from "./Components/VideoContainer/VideoContainer";
import VideosPageStyle from "./style/VideosPage.module.css";
import { VideoInfo, VideoAuthor } from "../../interfaces/interfaces";

const VideosPage: React.FC = () => {
  const videoSource = require("../../videos/v3.mp4");
  const videoImage = require("../../Images/Top-One-Piece-PFP-1200x1200.png");
  const videoInfoParams: VideoInfo = {
    videoSource: videoSource,
    videoDescription: "An example video description.",
    videoTags: ["tag1", "tag2", "tag3"],
    videoSong: {
      songName: "example_user song",
      songAvatar: videoImage,
    },
  };
  const VideoAuthorParams: VideoAuthor = {
    videoAuthorAvatar: videoImage,
    videoAuthorUsername: "example_user",
  };
  return (
    <div className={VideosPageStyle.Main}>
      <VideoContainer
        videoInfo={videoInfoParams}
        videoAuthor={VideoAuthorParams}
      />
    </div>
  );
};
export default VideosPage;
