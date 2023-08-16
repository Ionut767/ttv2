import VideoContainer from "./Components/VideoContainer/VideoContainer";
import VideosPageStyle from "./style/VideosPage.module.css";
import { VideoInfo, VideoAuthor } from "../../interfaces/interfaces";
import { useRef } from "react";

const VideosPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const currentScroll = containerRef.current.scrollTop;
      const videoHeight = window.innerHeight;
      containerRef.current.scrollTop = currentScroll + videoHeight;
    }
  };

  const videoSource = require("../../videos/v2.mp4");
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
    <div
      className={VideosPageStyle.Main}
      ref={containerRef}
      onScroll={handleScroll}>
      <VideoContainer
        videoInfo={videoInfoParams}
        videoAuthor={VideoAuthorParams}
      />
      <VideoContainer
        videoInfo={videoInfoParams}
        videoAuthor={VideoAuthorParams}
      />
      <VideoContainer
        videoInfo={videoInfoParams}
        videoAuthor={VideoAuthorParams}
      />
      <VideoContainer
        videoInfo={videoInfoParams}
        videoAuthor={VideoAuthorParams}
      />
      <VideoContainer
        videoInfo={videoInfoParams}
        videoAuthor={VideoAuthorParams}
      />
    </div>
  );
};
export default VideosPage;
