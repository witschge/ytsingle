import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  return (
    <div>
      <Header />
      <main>
        <VideoPlayer />
      </main>
      <Sidebar />

      <Footer />
    </div>
  );
}
export default App;
