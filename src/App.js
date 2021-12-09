import './App.css';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import {Link, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';

const NavStyles = styled.nav`
  ul {
    margin: 20px 0;
    padding: 0;
  }
  
  li{
    margin: 0 10px 0 0;
    padding: 0;
    list-style: none;
    display: inline-block;
  }
`;

const LinkStyles = styled(Link)`
  border-radius: 3px;
  border: 2px solid palevioletred;
  background: palevioletred;
  color: white;
  padding: 0.25em 1em;
  font-weight: bold;
  font-size: 1.2em;
  text-decoration: none;
`;

function App() {
  return (
    <>
      <NavStyles>
        <ul>
          <li>
            <LinkStyles  to="/">Home</LinkStyles>
          </li>
          <li>
            <LinkStyles  to="/about">About</LinkStyles>
          </li>
          <li>
            <LinkStyles  to="/contact">Contact</LinkStyles>
          </li>
        </ul>
      </NavStyles>
      <Routes>
        <Route exact path="/" element={<Home />} /> 
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
