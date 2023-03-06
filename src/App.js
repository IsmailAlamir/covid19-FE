import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import AllCountries from './AllCountries';
import MyRecords from './MyRecords';
import Footer from './Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route

            exact path="/"
            element={<Home />}
          >
          </Route>

          <Route
            exact path="/allCountries"
            element={<AllCountries />}
          >
          </Route>

          <Route
            exact path="/myRecords"
            element={ <MyRecords />}
          >
          </Route>

        </Routes>
        <Footer />
      </Router>
    </>);
}

export default App;
