import React, { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    InputGroup,
} from 'reactstrap';
import { DashBoard } from './DashBoard';

const Header = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [news, setNews] = useState([])
    const [category, setCatergory] = useState('business')
    const [heading, setHeading] = useState('Top-HeadLines')
    const [text,setText] = useState('')

    const toggle = () => setIsOpen(!isOpen);

    const clickHandler = (e) => {
        props.categoryNews(e.target.value)
    }
    const buttonHandler = ()=>{
        props.searchNews(text)
    }
    return (
        <div>
            <Navbar className='bg-dark justify-content-end' expand="md">
                <NavbarBrand className='text-white' href="/">News</NavbarBrand>
                <NavbarToggler className='bg-white' onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <NavItem>
                            <NavLink href="#" className='text-white' onClick={props.topHeadNews}>Top-HeadLines</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className='text-white' href="#" onClick={props.readList}>
                                Read-List
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret className='text-white'>
                                Categories
                            </DropdownToggle>
                            <DropdownMenu end>
                                <DropdownItem onClick={clickHandler} value="business">Business</DropdownItem>
                                <DropdownItem onClick={clickHandler} value="entertainment">Entertainment</DropdownItem>
                                <DropdownItem onClick={clickHandler} value="general">General</DropdownItem>
                                <DropdownItem onClick={clickHandler} value="health">Health</DropdownItem>
                                <DropdownItem onClick={clickHandler} value="sports">Sports</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </Nav>
                    <InputGroup className='w-25'>
                    <input type="text" placeholder='Enter text' className='form-control' value={text} onChange={e=>setText(e.target.value)}/>
                    <button className='btn btn-secondary' onClick={buttonHandler}>Search</button>
                    </InputGroup>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Header;