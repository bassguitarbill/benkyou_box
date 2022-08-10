import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Avatar from 'rsuite/Avatar';
import Dropdown from 'rsuite/Dropdown';

import { UserContext } from './App';

const NavLink = forwardRef(({ href, children, ...rest }, ref) => (
  <Link ref={ref} to={href} {...rest}>
    {children}
  </Link>
));

export default function UserDropdown() {
  const user = useContext(UserContext);
  const avatar = <Avatar src="https://avatars.githubusercontent.com/u/5301614?s=88&u=ccc3d7d5db7e3ab0d41785119cb1a7267d58d074&v=4" circle />;
  
  return (
    <div>
      <Dropdown renderToggle={() => avatar} trigger="hover">
        <Dropdown.Item as={NavLink} href="/user">Modify User Information</Dropdown.Item>
        <Dropdown.Item as={NavLink} href="/sign_out">Sign Out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}
