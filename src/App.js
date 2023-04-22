import './App.css';
import DashBoard from './components/DashBoard';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HamBurgerMenu from './components/HamBurgerMenu';
import ProductCatalouge from './product/ProductCatalouge';
import NewLeads from './viewdata/NewLeads';
import ViewAllApplicants from './viewdata/ViewAllApplicants';

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
              <HamBurgerMenu />
            </div>
          </div>

          <div className='gridTwo'>

            <Routes>
              <Route path='/' element={<DashBoard />} />
              <Route path='/productcatalouge' element={<ProductCatalouge/>}/>
              <Route path='/view/newleads' element={<NewLeads/>}/>
              <Route path='/view/newapplicants' element={<ViewAllApplicants/>}/>
            </Routes>

          </div>
        </div>
      </BrowserRouter>
    </div>

  );
}

export default App;
