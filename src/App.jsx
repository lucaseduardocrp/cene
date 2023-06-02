import Header from './components/Header'
import GlobalStyles from './styles/GlobalStyles'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import Content from './pages/Content/index';
import Donate from './pages/Donate/index';
import { Footer } from './components/Footer';


export default function App() {
 return (
    <>
      <Header />  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/content' element={<Content/>}/>
          <Route path='/donate' element={<Donate/>}/>
        </Routes>
      <Footer />
      
      <GlobalStyles />
    </>
  )
}
