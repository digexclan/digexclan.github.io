/* eslint-disable @next/next/link-passhref */
import { faFacebook, faInstagram, faLinkedin, faMailchimp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Link from 'next/link';

function footer() {
  return (
    <div className='flex flex-row justify-center items-center mt-16'>
      <div className='flex flex-col items-center justify-center py-8 border-t-2 w-4/6'>
        <div className='flex'>
          <a href="https://www.facebook.com/digexsociety"><FontAwesomeIcon icon={faFacebook} className='mr-2' style={{width: 22, height: 22}}/></a>
          <FontAwesomeIcon icon={faInstagram} className='mr-2' style={{width: 22, height: 22}}/>
          <FontAwesomeIcon icon={faLinkedin} className='mr-2' style={{width: 22, height: 22}}/>
          <FontAwesomeIcon icon={faYoutube} style={{width: 22, height: 22}}/>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-xl'>Digexclan</h1>
          <Link href="mailto: digex@dpsrkp.net">digex@dpsrkp.net</Link>
          <p>&copy;2022-23 Digexclan</p>
        </div>
      </div>
    </div>
  );
}

export default footer;
