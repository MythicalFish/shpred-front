import React, { Fragment } from 'react'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

export default props => {
  return (
    <Fragment>
      <AppHeader {...props} />
      {props.children}
      <AppFooter />
    </Fragment>
  )
}
