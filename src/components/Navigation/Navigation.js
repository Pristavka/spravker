import React from 'react';
import { Link } from 'react-router-dom';

import router from '../../configs/router';

const Navigation = () => {
  return (
    <nav>
      {router.mainMenuLinks.map(link => (
        <Link
          key={link.path}
          to={link.path}
        >
          {link.linkName}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
