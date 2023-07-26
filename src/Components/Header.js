import React, { useState } from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';

function Header() {
    const [effected, setEffected] = useState(false);

    const handleCheckboxChange = () => {
        setEffected(!effected);
    };

    return (
        <div>
   <Navbar expand="lg" >
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav className="justify-content-end"> {/* Added justify-content-end class */}
                            <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                            <Form.Check
                                type="checkbox"
                                checked={effected}
                                onChange={handleCheckboxChange}
                                label="Effected"
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default Header;
