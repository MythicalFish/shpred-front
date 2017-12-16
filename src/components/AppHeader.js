import React from 'react'
import { Row, Col } from 'antd'

export default props => {
  return (
    <Row type="flex" justify="space-between">
      <Col span={6}>Shpred</Col>
      <Col span={6}>Search</Col>
    </Row>
  )
}
