import React from 'react'
import { Col, Container , Row } from 'react-bootstrap'
import Videos from '../../Component/Videos/Videos'
import Category from '../../Component/Category/Category'

const HomeScreen = () => {
  return (
    <Container>
        <Category/>
        
        <Row>
            {
                [...new Array(24)].map(()=>(
                    <Col lg={3} md={4}>
                    <Videos/>
                    </Col>
                ))
            }
        
        </Row>

    </Container>

   
  )
}

export default HomeScreen