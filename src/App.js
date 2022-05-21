import './App.css'
import Navbar from './components/Navbar';
import Chart from './components/Chart';
import { CartProvider } from './context/index-context';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navbar />
        <Chart />
      </CartProvider>
    </div>
  );
}

export default App;
