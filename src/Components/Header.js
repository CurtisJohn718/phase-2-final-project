import React from 'react';

import { Navigation } from './Navigation';

const Header = () => {
  return (
    <header>
        <div className='headerImgs'>
            <div className="">
              <img src="https://decisionscience.org.uk/wp-content/uploads/2023/01/Decision-Science-Zoo-Animals-Giraffe-Elephant-Zebra-Lion.jpg" alt="" />
            </div>
            <div className="headerBanner">
              <img src="" alt="" />
            </div>
        </div>
        
        <Navigation />
    </header>
  );
};

export default Header;