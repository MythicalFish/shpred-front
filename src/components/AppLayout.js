import React from 'react'
import { Layout } from 'antd'
import AppHeader from './AppHeader'
const { Header, Content } = Layout

export default props => {
  return (
    <Layout>
      <Header>
        <AppHeader />
      </Header>
      <Content>{props.children}</Content>
    </Layout>
  )
}
