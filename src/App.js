import "./tailwind.css";
import "./main.css";
import { Navbar } from "./components/common/Navbar";
import { Sidebar } from "./components/common/Sidebar";
import { Footer } from "./components/common/Footer";
import { Modal } from "./components/Modal";

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <main>
      <Sidebar/>
        <h5 className="text-4xl ml-36">iuio hgjh</h5>
        <Modal/>
      </main>
      {/* <Footer/>  */}
    </div>
  );
}

export default App;
