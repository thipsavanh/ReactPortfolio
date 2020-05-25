import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Footer from './components/Footer';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Thipsavanh Douangboupha",
      headerLinks: [
        { title: "About", path: "/" },
        { title: "Porfolio", path: "/portfolio" },
        { title: "Contact", path: "/contact" }
      ],
      about: {
        title: "About Me"
      },
      portfolio: {
        title: "Here are some of my projects: "
      },
      contact: {
        title: "I'd love to hear from you"
      }
    }
  }


render() {
  return (
    <Router>
      <Container className="p-0" fluid={true}>
        <Navbar className="border-bottom" bg="transparent" expand="lg">
          <Navbar.Brand>Thipsavanh Douangboupha</Navbar.Brand>
          <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">
              <Link className="nav-link" to="/">About</Link>
              <Link className="nav-link" to="portfolio">Portfolio</Link>
              <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/" exact render={() => <About title={this.state.about.title} />} />
        <Route path="/portfolio" render={() => <Portfolio title={this.state.portfolio.title} />} />
        <Route path="/contact" render={() => <Contact title={this.state.contact.title} />} />
        <Footer />
      </Container>
    </Router>
  );
}
}

export default App;