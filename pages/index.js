import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li><Link href='/events'><a> Events </a></Link></li>
    <li><Link href='/login'><a> login </a></Link></li>
    <li><Link href='/logout'><a> logout </a></Link></li>
    <li><Link href='/profile'><a> Profile </a></Link></li>
  </ul>
)
