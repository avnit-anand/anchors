import React, { useEffect, useState } from "react";

const YouTubeVideoInfo = () => {
  let [details, setDetails] = useState([]);
  useEffect(() => {
    const apiKey = "AIzaSyABlZdVNSVVaWpgUjtxsQvheFnw-bvq4Ho"; // Replace with your API key
    const videoId = "eILUmCJhl64"; // Replace with the desired video ID

    const initYouTubeAPI = () => {
      return new Promise((resolve, reject) => {
        gapi.load("client", () => {
          gapi.client
            .init({
              apiKey,
              discoveryDocs: [
                "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest",
              ],
            })
            .then(() => {
              resolve();
            })
            .catch((error) => {
              reject(error);
            });
        });
      });
    };

    const getVideoInfo = () => {
      gapi.client.youtube.videos
        .list({
          part: "snippet,statistics",
          id: videoId,
        })
        .then((response) => {
          const video = response.result.items[0];
          const title = video.snippet.title;
          const views = video.statistics.viewCount;
          const comments = video.statistics.commentCount;
          const updatedDate = video.snippet.publishedAt; // or video.snippet.updatedAt
          const thumbnailUrl = video.snippet.thumbnails.default.url;

          details.push({"title" : {title},"views":{views}, "no of comments": {comments}, "updated Date": {updatedDate}, "thumbnail Url":thumbnailUrl});
          console.log("mfasain"+details[0]);
          // console.log("Title:", title);
          // console.log("Views:", views);
          // console.log("Comments:", comments);
          // console.log("Updated Date:", updatedDate);
          // console.log("Thumbnail Url : ", thumbnailUrl);
        })
        .catch((error) => {
          console.error("Error fetching video information:", error);
        });
    };

    const fetchData = async () => {
      try {
        await initYouTubeAPI();
        getVideoInfo();
      } catch (error) {
        console.error("Error initializing YouTube API:", error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return <div>{/* Your component JSX */}</div>;
};

export default YouTubeVideoInfo;
