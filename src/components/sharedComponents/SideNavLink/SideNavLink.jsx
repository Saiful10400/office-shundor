import React from 'react';
import { NavLink } from 'react-router-dom';

const SidenavLink = ({to,icon, children}) => {
    return (
        <NavLink
      className={" px-3 py-2 rounded-md  text-black text-md transition-all truncate flex flex-col lg:flex-row items-center lg:gap-4 " }
      to={to }

    >
      {icon && icon}
      <span className="hidden lg:block truncate">{children}</span>
    </NavLink>
    );
};

export default SidenavLink;