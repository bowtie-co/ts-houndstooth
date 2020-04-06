import React, { useState } from 'react';
// import { navigate } from 'hookrouter';
import { auth } from '../../lib';
import { Nav, NavItem, NavLink, Collapse, Navbar, NavbarToggler, NavbarBrand } from 'reactstrap';

import { RepoSelector } from '../';

export const AppNavbar = ({ children, navItems = [], ...props }) => {
  const { user, repo, repos, github, isAuthorized } = props;
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen((prevState) => !prevState);

  console.debug('AppNavbar', { props });

  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">
        <span className="logo">
          <img alt="Houndstooth Logo" src="/logo.png" />
        </span>
        &nbsp; Houndstooth
      </NavbarBrand>
      <NavbarToggler onClick={toggleNav} />
      <Collapse isOpen={isNavOpen} navbar>
        <Nav className="mr-auto" navbar>
          {navItems.map((nav, index) => (
            <NavItem key={index} active={window.location.pathname.indexOf(nav.href) > -1}>
              <NavLink href={nav.href}>{nav.text}</NavLink>
            </NavItem>
          ))}
          {isAuthorized && (
            <NavItem>
              <NavLink onClick={() => auth.logout()} href="/">
                Logout ({user.login})
              </NavLink>
            </NavItem>
          )}
        </Nav>
        <Nav className="ml-auto" navbar>
          <RepoSelector {...props} />
        </Nav>
      </Collapse>
    </Navbar>
  );
};
