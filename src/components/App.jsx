import Home from 'Pages/Home';
import LoginPage from 'Pages/LoginPage';
import RegisterPage from 'Pages/RegisterPage';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}
