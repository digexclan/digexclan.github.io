import { faFacebook, faInstagram, faLinkedin, faMailchimp, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Link from 'next/link';

function footer() {
  return (
    <div className='flex flex-col items-center justify-center py-8 border-t-2'>
      <div>
        <FontAwesomeIcon icon={faFacebook} className='mr-2' style={{width: 22, height: 22}}/>
        <FontAwesomeIcon icon={faInstagram} className='mr-2' style={{width: 22, height: 22}}/>
        <FontAwesomeIcon icon={faLinkedin} className='mr-2' style={{width: 22, height: 22}}/>
        <FontAwesomeIcon icon={faYoutube} className='mr-2' style={{width: 22, height: 22}}/>
        <FontAwesomeIcon icon={faTwitter} style={{width: 22, height: 22}}/>
      </div>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-xl'>Research Rhinos</h1>
        <Link href="mailto: researchrhinos@gmail.com">researchrhinos@gmail.com</Link>
        <p>&copy;2021-22 Research Rhinos</p>
      </div>
    </div>
  );
}

export default footer;
