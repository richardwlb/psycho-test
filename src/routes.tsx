import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landingpage from './pages/LandingPage';
import Question from './pages/Question';
import Result from './pages/Result';

const routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
        <Route path="/question" element={<Question />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default routes;
