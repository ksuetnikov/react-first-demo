import Header from "./components/Header/Header";
import Articles from "./components/Articles/Articles";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./About";

function App() {
  return (
    <div style={{ padding: "20px, 40px" }}>
      <Header />
      <Articles />
    </div>
  );
}

export default App;
