import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Albums from "./components/Albums";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Banner />
      <Albums />
      <Footer />
    </div>
  );
}

export default App;
