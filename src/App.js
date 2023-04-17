import './App.css';
import DashBoard from './components/DashBoard';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <div>
        <Header />
      </div>
      <div className="main">
        <div className='row'>
          <div className='card bg-light sideDash'>
              <DashBoard/>
          </div>
          <div className='card bg-warning mainData'>
            View Tablets,data etc
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
