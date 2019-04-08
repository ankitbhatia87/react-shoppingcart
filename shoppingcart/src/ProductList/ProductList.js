import React, { Component } from 'react';
import Product from '../Product/Product';
import {Container, Row, Col} from 'react-bootstrap';
import './ProductList.css';

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productsList: props.products
        }
    }

    handleProductTotal(subTotal) {
        this.props.handleCartTotal(subTotal);
    }

    handleProductRemove(productId) {
        this.props.handleProductRemove(productId);
    }
    render () {
        var component = this;
        var productsListLength = this.state.productsList.length;
        var products = this.state.productsList.map(function(product) {
            return (
                <Product key={product.id} 
                        name={product.name}
                        id={product.id}
                        image={product.image}
                        styleNumber={product.styleNumber}
                        colour={product.colour}
                        size={product.size}
                        price={product.price}
                        handleTotal={component.handleProductTotal.bind(component)}
                        isFavourite={product.isFavourite}
                        subTotal={component.props.subTotal}
                        handleRemove={component.handleProductRemove.bind(component)}
                         />
            )
        })
        return (
            <Container>
                <Row className="border-top product-list-header border-bottom text-capitalize small mt-1 pt-2 pb-2">
                    <Col lg="9">product Description</Col>
                    <Col lg="1">price</Col>
                    <Col lg="1">quantity</Col>
                    <Col lg="1">subtotal</Col>
                </Row>
                <Container className="p-0">
                    {products}
                </Container>
                
            </Container>
            
            
        )
    }
}