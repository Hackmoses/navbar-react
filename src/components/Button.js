import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

export function Button() {
  return (
    <Link to='call-now'>
      <button className='btn'>Call Now</button>
    </Link>
  );
}
