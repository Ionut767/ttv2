import VideoContainer from "./Components/VideoContainer/VideoContainer";
import VideosPageStyle from "./style/VideosPage.module.css";
import { VideoInfo, VideoAuthor } from "../../interfaces/interfaces";

const VideosPage: React.FC = () => {
  const videoImage = require("../../Images/Top-One-Piece-PFP-1200x1200.png");

  const videoInfoArray: VideoInfo[] = [
    {
      videoSource: require("../../videos/v2.mp4"),
      videoDescription: "Learn how to be a better developer!",
      videoTags: ["Programming", "Coding", "Fun"],
      videoSong: {
        songName: "The Best Day Ever!",
        songAvatar: videoImage,
      },
    },
    {
      videoSource: require("../../videos/v3.mp4"),
      videoDescription: "Learn how to be a better developer!",
      videoTags: ["Programming", "Coding", "Fun"],
      videoSong: {
        songName: "The Best Day Ever!",
        songAvatar: videoImage,
      },
    },
    {
      videoSource: require("../../videos/v1.mp4"),
      videoDescription: "Learn how to be a better developer!",
      videoTags: ["Programming", "Coding", "Fun"],
      videoSong: {
        songName: "The Best Day Ever!",
        songAvatar: videoImage,
      },
    },
  ];

  const VideoAuthorParams: VideoAuthor = {
    videoAuthorAvatar: videoImage,
    videoAuthorUsername: "Ionut767",
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
