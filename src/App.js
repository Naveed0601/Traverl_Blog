import "./App.css";
import Blog from "./component/Blog";
import Features from "./component/Features";
import Header from "./component/Header";
import Intro from "./component/Intro";

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Features />
      <Blog />
    </div>
  );
}

export default App;
