import './App.css';
import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./pages/Header";
import Footer from "./pages/Footer";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import Register from './pages/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import ProfilePage from './pages/ProfilePage';

export default function App() {
    // handleAlert function
  const handleAlert = () => {
    alert("Button clicked!");
  };

  return ( 
    <div className="App">
      <BrowserRouter>
      <AuthContextProvider>
        <Header />
            <Routes>
              <Route path="/" element={<SignIn />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/register" element={<Register />} />
              <Route 
                path="/tasks"
                element={
                  <ProtectedRoute>
                    <HomePage />
                  </ProtectedRoute>
                }
                />
                <Route 
                  path="/about"
                  element={
                    <ProtectedRoute>
                      <AboutPage />
                    </ProtectedRoute>
                  }
                />
                <Route 
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <ProfilePage />
                    </ProtectedRoute>
                  }
                />
            </Routes>
          
        <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  )
}
