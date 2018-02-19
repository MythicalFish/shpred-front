import React from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default props => {
  return (
    <div className="min-vh-100 flex flex-column">
      <AppHeader {...props} />
      <div className="flex-auto relative">{props.children}</div>
      <AppFooter />
    </div>
  )
}
