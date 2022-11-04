import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Order from './pages/Order';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
