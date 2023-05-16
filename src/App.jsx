import Header from './components/Header'
import GlobalStyles from './styles/GlobalStyles'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
 return (
    <>
      <Header />
      
      <main>
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
      </main>

      <GlobalStyles />
    </>
  )
}
