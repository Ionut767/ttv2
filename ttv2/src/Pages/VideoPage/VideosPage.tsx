import VideoContainer from "./Components/VideoContainer/VideoContainer";
import VideosPageStyle from "./style/VideosPage.module.css";
import { VideoInfo, VideoAuthor } from "../../interfaces/interfaces";

const VideosPage: React.FC = () => {
  const videoImage = require("../../Images/Top-One-Piece-PFP-1200x1200.png");

  const videoInfoArray: VideoInfo[] = [
    {
      videoSource: require("../../videos/v2.mp4"),
      videoDescription: "An example video description for v2.mp4.",
      videoTags: ["tag1", "tag2", "tag3"],
      videoSong: {
        songName: "example_user song",
        songAvatar: videoImage,
      },
    },
    {
      videoSource: require("../../videos/v3.mp4"),
      videoDescription: "An example video description for v3.mp4.",
      videoTags: ["tag4", "tag5", "tag6"],
      videoSong: {
        songName: "example_user song",
        songAvatar: videoImage,
      },
    },
    {
      videoSource: require("../../videos/v1.mp4"),
      videoDescription: "An example video description for v1.mp4.",
      videoTags: ["tag7", "tag8", "tag9"],
      videoSong: {
        songName: "example_user song",
        songAvatar: videoImage,
      },
    },
  ];

  const VideoAuthorParams: VideoAuthor = {
    videoAuthorAvatar: videoImage,
    videoAuthorUsername: "example_user",
  };
  return (
    <div className={VideosPageStyle.Main}>
      {videoInfoArray.map((videoInfoParams, index) => (
        <VideoContainer
          key={index}
          videoInfo={videoInfoParams}
          videoAuthor={VideoAuthorParams}
        />
      ))}
    </div>
  );
};
export default VideosPage;
