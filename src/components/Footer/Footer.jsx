import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer () {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#05059ee0', color: 'white',height:'20em',zIndex:'200' }}>
      <div>
        <a href="#home" style={{color: 'white', textDecoration: 'none'}}>Home</a><br/><br/>
        <a href="#collection" style={{color: 'white', textDecoration: 'none', marginLeft: '20px'}}>Collection</a>
      </div>
      <div>
        <a href="#facebook" style={{marginRight: '10px'}}>
          <FontAwesomeIcon icon={FaFacebookSquare} style={{fontSize: '24px', color: 'white'}} />
        </a>
        <a href="#twitter" style={{marginRight: '10px'}}>
          <FontAwesomeIcon icon={FaTwitter} style={{fontSize: '24px', color: 'white'}} />
        </a>
        <a href="#instagram">
          <FontAwesomeIcon icon={FaInstagram} style={{fontSize: '24px', color: 'white'}} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
