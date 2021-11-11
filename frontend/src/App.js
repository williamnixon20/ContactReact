import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import './App.css';
import Header from './components/Header'
import ContactsListPage from './pages/ContactsListPage'
import ContactPage from './pages/ContactPage'
import ContactAdd from "./pages/ContactAdd";

function App() {
  return (
    <div className="container dark">
      <div className="app">
        <Header />
        <Router>
          <Routes>
            <Route path="/" exact element={<ContactsListPage />} />
            <Route path="/contact/:id" element={<ContactPage />} />
            <Route path="/add" element={<ContactAdd />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
