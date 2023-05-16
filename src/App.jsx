import Header from './components/Header'
import GlobalStyles from './styles/GlobalStyles'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Content from './pages/Content/index';
import Participate from './pages/Participate/index';
import Donate from './pages/Donate/index';
import Contact from './pages/Contact/index';


export default function App() {
 return (
    <>
      <Header />  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/content' element={<Content/>}/>
          <Route path='/participate' element={<Participate/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        
      <GlobalStyles />
    </>
  )
}
