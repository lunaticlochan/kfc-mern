import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";  // Import Font Awesome
import Signup from "./Signup";
import Signin from "./Signin";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Manage from "./Manage";
import PaymentsPage from "./PaymentsPage";
import Header from "./Header";
import Footer from "./Footer";
import { ToastProvider } from "./ToastContext";
import './App.css';  // Import the CSS file
import ProtectedRoute from "./ProtectedRoute";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToBottom() {
  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
}

function App() {
  return (
    <>
      <div className="background">
        <ToastProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Signin />} />
              <Route path="/" element={<Home />} />
              <Route path="/menu" element={<Menu />} />

              <Route path="/manage" element={<ProtectedRoute element={<Manage />} />}/>
              <Route path="/payments" element={<PaymentsPage />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </ToastProvider>
        <div className="fixed-buttons">
          <button className="btn btn-primary m-2" onClick={scrollToTop}>
            <i className="fas fa-arrow-up"></i>
          </button>
          <button className="btn btn-secondary m-2" onClick={scrollToBottom}>
            <i className="fas fa-arrow-down"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default App;