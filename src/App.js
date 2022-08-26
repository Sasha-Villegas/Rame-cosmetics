
import './App.css';
import Navbar from './components/Navbar.js';
import "./style/navbar.css";
import "./style/itemlistc.css";
import Footer from './components/Footer.js';
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="App-content">
       <ItemListContainer  greeting={"OUR PRODUCTS!"} />
      </div>
    </div>
  );
}

export default App;
