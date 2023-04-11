import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./Elements/Header";
import Footer from "./Elements/Footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="min-h-[calc(100vh-480px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
