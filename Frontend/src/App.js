import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Attendance, Dashboard, Home, Nav, Reports, Profile, SignupForm, LoginForm } from './components';
import { ContextApiProvider } from './context/ContextApi';

function App() {

  return (
    <ContextApiProvider>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/reports" element={<Reports />} />
          <Route exact path="/attendance" element={<Attendance />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/signup" element={<SignupForm />} />
          <Route exact path="/login" element={<LoginForm />} />
        </Routes>
      </BrowserRouter>
    </ContextApiProvider>
  );
}

export default App;
