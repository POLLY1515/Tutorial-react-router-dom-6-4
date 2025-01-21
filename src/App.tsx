import { Link } from "react-router-dom";
import './App.css';

function App() {

  return (
    <nav>
      

      <Link to="/invoices">Invoices</Link>{""}
      <Link to="/expenses">Espenses</Link>

    </nav>
  );
}

export default App
