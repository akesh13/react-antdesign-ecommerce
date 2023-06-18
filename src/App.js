import "./App.css";
import Header from "./Components/Header/Header";
import PageContents from "./Components/PageContents/PageContents";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <PageContents />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
