import { Routes, Route } from 'react-router-dom';
import { Header } from './components/';
import { Home, SingleCard, Login, Register } from './pages/';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='/cards'>
          <Route path=':cardId' element={<SingleCard />} />
        </Route>
        <Route
          path='*'
          element={<h1 style={{ textAlign: 'center' }}>No Such Page!</h1>}
        />
      </Route>
    </Routes>
  );
};

export default App;
