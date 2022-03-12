import './App.css';
import { useState } from 'react';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import Logo from './assets/images/qtemu.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Todo from "./pages/Todo";
import Home from "./pages/Home";
import ModalAddEvent from 'components/ModalAddEvent';

function App() {
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggle = () => setIsCollapseOpen(!isCollapseOpen);
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  return (
    <div className="App">
      <Router>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
              <img src={Logo} alt="Logo" style={{ width: "32px" }} className="mr-2" />
              QTemu
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isCollapseOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="#explore">Explore</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/todo">To Do List
                </NavLink>
              </NavItem>
            </Nav>
            <Button onClick={toggleModal} color="primary">Create Meetup</Button>
          </Collapse>
        </Navbar>
        <ModalAddEvent isOpen={isModalOpen} handleCloseModal={toggleModal}/>
        <div className="container">
          <Switch>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <section id="footer" className="text-center">
            <b>Copyright Hacktiv8 @2021</b>
          </section>
        </div>
      </Router>
    </div>
  );
}

export default App;
