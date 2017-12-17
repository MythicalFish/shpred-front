import React from 'react'
import AppHeader from './AppHeader'

export default props => {
  return (
    <div>
      <AppHeader />
      <div>{props.children}</div>
    </div>
  )
}
