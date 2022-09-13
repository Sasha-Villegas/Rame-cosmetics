
import './App.css';
import Navbar from './components/Navbar/Navbar.js';
import './components/Navbar/navbar.css';
import './components/ItemListContainer/itemlistc.css';
import Footer from './components/Footer/Footer.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';



function App() {
  return (
    <div className="App">
        <Navbar />
      <div className="App-content">
       <ItemListContainer greeting={"OUR PRODUCTS!"} />
       <ItemDetailContainer />
      </div>
    </div>
  );
}

export default App;
