
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import './components/Navbar/navbar.css';
import './components/ItemListContainer/itemlistc.css';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';

function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="App-content">
       <ItemListContainer greeting={"OUR PRODUCTS!"} />
      </div>
    </div>
  );
}

export default App;
