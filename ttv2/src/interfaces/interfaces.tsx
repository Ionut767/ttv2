export interface VideoContainerInterface {
  videoInfo: VideoInfo;
  videoAuthor: VideoAuthor;
}

export interface VideoInfo {
  videoSource: string;
  videoDescription: string;
  videoTags: string[];
}

export interface VideoAuthor {
  videoAuthorAvatar: string;
  videoAuthorUsername: string;
}
