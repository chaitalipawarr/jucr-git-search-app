import logo from "./logo.svg";
import "./App.scss";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App" data-testid="jucr-app">
      <header className="App__header">
        <img src={logo} className="App__header__logo" alt="logo" />
        <span>JUCR</span>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
