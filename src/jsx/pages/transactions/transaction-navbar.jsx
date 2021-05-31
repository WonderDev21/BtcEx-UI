import React, { } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap'



function TransactionNavbar(props) {

  return (
    <>
      <div className="container pt-3">
        <div className="row">
          <div className="col-xl-12">
            <div className="navigation">
              {/* <Navbar bg="light" variant="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse>
                  <Nav className="mr-auto">
                    <Nav.Link href="/transactions/deposit">Deposits</Nav.Link>
                    <Nav.Link href="/transactions/withdrawal">Withdrawals</Nav.Link>
                    <Nav.Link href="/transactions/statement">Statements</Nav.Link>
                    <Nav.Link href="/transactions/request">Requests</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Navbar> */}
              <Nav fill variant="pills" defaultActiveKey={props.active}>
                <Nav.Item>
                  <NavLink className="nav-link" to="/transactions/deposit">Deposits</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/transactions/withdrawal">Withdrawals</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/transactions/statement">Statements</NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink className="nav-link" to="/transactions/request">Requests</NavLink>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionNavbar;