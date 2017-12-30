import React from 'react'
import { Link } from 'react-router-dom'

export default props => {
  return (
    <div className="pa4 bb flex justify-between">
      <Link to="/">Shpred</Link>
      <div>Search</div>
    </div>
  )
}
