import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import VideoPlayer from "./components/VideoPlayer";
import CommentSection from "./components/CommentsSection";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="main-container">
        <main className="video-container">
          <VideoPlayer />
          <CommentSection className="comment-section" />
        </main>
      </div>
      <Footer />
    </div>
  );
}
export default App;
