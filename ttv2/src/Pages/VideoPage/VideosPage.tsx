import VideoContainer from "./Components/VideoContainer/VideoContainer";
import VideosPageStyle from "./style/VideosPage.module.css";
import { VideoInfo, VideoAuthor } from "../../interfaces/interfaces";

const VideosPage: React.FC = () => {
  const videoSource = require("../../videos/v3.mp4");
  const videoInfoParams: VideoInfo = {
    videoSource: videoSource,
    videoDescription: "An example video description.",
    videoTags: ["tag1", "tag2", "tag3"],
  };
  const VideoAuthorParams: VideoAuthor = {
    videoAuthorAvatar: "avatar.jpg",
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
