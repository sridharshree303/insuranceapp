import './App.css';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SideBar from "./components/SideBar"
import Renewal from "./viewData/renewal"
import ViewAll from './viewData/viewAll'


import ViewAllApplicants from './viewData/viewAll';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <div className='container-fluid shadowBottom'>
          <Header />
        </div>

        <div className='rightGrid row '>
          
          <div className='gridOne'>
            <input type="checkbox" id="check" name='check' className="hide" />
            <div className='dashboard shadowRight' id='dashboard' >
              <SideBar />
            </div>
          </div>

          <div className='gridTwo'>

            <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route exact path="/renewal" element={<Renewal/>}/>
              
              <Route exactpath='/viewAll' element={<ViewAll/>}/>
            </Routes>

          </div>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;