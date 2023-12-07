import styles from "./App.module.css";
import RequestCallBackPopup from "./components/RequestCallBackPopup/RequestCallBackPopup";
import TopEarnerVideo from "./components/TopEarnerVideo/TopEarnerVideo";
import YouTubeVideoInfo from "./logic/YoutubeVideoInfo";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className={styles.appContainer}>
      <HomePage />
      {/* <RequestCallBackPopup/> */}
      {/* <YouTubeVideoInfo/> */}
      <TopEarnerVideo/>
    </div>
  );
}

export default App;
