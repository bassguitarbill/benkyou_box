import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import Container from 'rsuite/Container';
import Content from 'rsuite/Content';
import Header from 'rsuite/Header';
import MenuIcon from '@rsuite/icons/Menu';
import Nav from 'rsuite/Nav';
import Navbar from 'rsuite/Navbar';

import Welcome from './Welcome';
import Submissions from './Submissions';
import NewSubmission from './NewSubmission';
import Prompts from './Prompts';
import User from './User';
import UserContext from './UserContext';

/* eslint-disable react/prop-types, react/jsx-props-no-spreading */
const NavLink = forwardRef(({ href, children, ...rest }, ref) => (
  <Link ref={ref} to={href} {...rest}>
    {children}
  </Link>
));
/* eslint-enable react/prop-types, react/jsx-props-no-spreading */

function SignOut() {
  window.location.replace('/sign_out');
  return <span>You are not logged in!</span>;
}

function getBrandImage() {
  return document.querySelector('meta[name="brand"]').content;
}

export default function App({ user }) {
  return (
    <UserContext.Provider value={user}>
      <Router>
        <Container>
          <Header>
            <Navbar appearance="default">
              <Navbar.Brand href="/" style={{ paddingTop: '0px' }}>
                <img src={getBrandImage()} alt="benkyou box logo" height="56px" />
              </Navbar.Brand>
              <Nav pullRight reversed>
                <Nav.Menu className="rs-dropdown-menu-pull-right" style={{ left: undefined, right: 0 }} icon={<MenuIcon />} noCaret>
                  <Nav.Item as={NavLink} href="/user">Modify User Information</Nav.Item>
                  <Nav.Item as={NavLink} href="/prompts">Manage Prompts</Nav.Item>
                  <Nav.Item as={NavLink} href="/sign_out">Sign Out</Nav.Item>
                </Nav.Menu>
              </Nav>
            </Navbar>
          </Header>
          <Content className="content">
            <Switch>
              <Route path="/submissions/new">
                <NewSubmission />
              </Route>
              <Route path="/submissions/">
                <Submissions />
              </Route>
              <Route path="/prompts/">
                <Prompts />
              </Route>
              <Route path="/user/">
                <User />
              </Route>
              <Route path="/sign_out/">
                <SignOut />
              </Route>
              <Route path="*">
                <Welcome />
              </Route>
            </Switch>
          </Content>
        </Container>
      </Router>
    </UserContext.Provider>
  );
}
App.propTypes = {
  user: PropTypes.shape({

  }).isRequired,
};

export { UserContext };
