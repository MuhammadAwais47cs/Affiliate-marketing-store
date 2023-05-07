import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import flage from "../../Images/1200px-Flag_of_Pakistan.svg.webp";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function Header() {
  return (
    <>
      <div className="row pt-2 bg-black">
        <div className="news-headlines">
          <div className="news-item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            nisi vitae sapien ultricies luctus a eget eros. Vivamus volutpat
          </div>
        </div>
        {/**
      <div className="left">
          <img src={flage} alt="" />
          <select>
            <option className="opt" value="PAK">
              PAK
            </option>
            <option className="opt" value="USA">
              USA
            </option>
            <option className="opt" value="IND">
              IND
            </option>
          </select>
          <p>+777777646734</p>
        </div>
        <div className="right">
          <a href="#">My Account</a>
          <a href="#">Wish List</a>
          <a href="#">Shopping</a>
          <a href="#">Cart</a>
          <a href="#">Checkout</a>
        </div>
     */}
      </div>
      <Navbar bg="light" className="mb-2 shadow" expand="md">
        <Container fluid>
          <Navbar.Brand>
            {" "}
            <h2>Logo</h2>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 rounded-5"
                aria-label="Search"
              />
              <Button variant="outline-success rounded-pill">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#home">
            <h2>All category</h2>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
