import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';



function Header1() {
	const { t, i18n } = useTranslation();
	const [lang, setLang] = useState("EN");

	const handleDropdownClick = (eventKey) => {
		console.log(eventKey);
		setLang(eventKey.toUpperCase());
		i18n.changeLanguage(eventKey);
	}

	return (
		<>
			<div className="header">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="navigation">
								<Navbar bg="light" expand="lg">
									<Link className="navbar-brand" to={'/'}><img src={require('./../../images/logo.png')} alt="" /></Link>
									{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
									{/* <Navbar.Collapse>
										<Nav className="ml-auto">
											<Nav.Link href="/market">Exchange</Nav.Link>
											<Nav.Link target="_blank" href="https://blog.btcex.pro">Blog</Nav.Link>
										</Nav>
									</Navbar.Collapse> */}
									<Nav className="ml-auto"></Nav>
									<NavDropdown className="mt-2 mr-2" menuRole="menu" title={lang} id="basic-nav-dropdown" onSelect={handleDropdownClick}>
										<NavDropdown.Item eventKey="en">English</NavDropdown.Item>
										<NavDropdown.Item eventKey="zh">繁體中文</NavDropdown.Item>
									</NavDropdown>
									<div className="signin-btn mt-2">
										<Link to="/signin">
											<button className="btn btn-primary">{t('signin')}</button>
										</Link>
									</div>
								</Navbar>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Header1;