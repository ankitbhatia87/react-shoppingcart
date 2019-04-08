import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './OrderSummary.css';

class OrderSummary extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let cartTotal = this.props.cartTotal;
        return (
            <Container>
                <Col lg="12" className="mt-3 d-lg-none d-xl-none d-sm-block">
                    <Row>
                        <button className="promo-code text-uppercase pb-1 pt-1"><strong>apply promo code +</strong></button>
                    </Row>
                </Col>
                <Col lg="12" className="mt-4 pb-4 order-summary pt-2">
                    <Row>
                        <Col lg="12" className="p text-uppercase text-center"><strong>Order Summary</strong></Col>
                    </Row>
                    <Row className="small mt-2">
                        <Col lg="7 text-uppercase">Subtotal</Col>
                        <Col lg="5" className="text-right">{cartTotal}</Col>
                    </Row>
                    <Row className="small mt-2 pb-3 border-bottom">
                        <Col lg="7 text-uppercase">Shipping</Col>
                        <Col lg="5" className="text-right">From FREE</Col>
                    </Row>
                    <Row className="small mt-2">
                        <Col lg="7 text-uppercase">
                            <strong>Total</strong><br />
                            <span className="text-capitalize">(Before Shipping)</span>
                        </Col>
                        <Col lg="5" className="text-right"><strong>{cartTotal}</strong></Col>
                    </Row>
                </Col>
                <Col lg="12" className="mt-3 d-none d-lg-block">
                    <Row>
                        <button className="promo-code text-uppercase pb-1 pt-1"><strong>apply promo code +</strong></button>
                    </Row>
                </Col>
                <Col lg="12" className="mt-3">
                    <Row>
                        <button className="checkout text-uppercase pb-2 pt-2">checkout securely</button>
                    </Row>
                </Col>
            </Container>
            
        )
    }
}

export default OrderSummary;