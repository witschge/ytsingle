import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
//import Sidebar from "./components/sidebar/Sidebar";
import VideoPlayer from "./components/VideoPlayer";
import CommentSection from "./components/CommentsSection";

function App() {
  return (
    <div>
      <Header />
      <main style={{ background: "#474f7a", minHeight: "80vh" }}>
        <VideoPlayer />
        <CommentSection />
      </main>

      <Footer />
    </div>
  );
}
export default App;
