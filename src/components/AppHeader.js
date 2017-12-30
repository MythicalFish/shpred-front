import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.svg'

export default props => {
  return (
    <div className="pa4 bb flex justify-between">
      <Link to="/">
        <img src={Logo} alt="Shpred" className="w4" />
      </Link>
      <div>Search</div>
    </div>
  )
}
