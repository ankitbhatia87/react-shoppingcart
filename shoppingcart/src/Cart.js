import React, { Component } from 'react';
import './Cart.css';
import ProductList from './ProductList/ProductList';
import OrderSummary from './OrderSummary/OrderSummary';
import {Container, Row, Col} from 'react-bootstrap';

let data = {
  "productsList": [
      {
          "id": "1",
          "name": "Varsity Jacket",
          "styleNumber": "CR82E8D6GL",
          "colour": "Midnight",
          "size": "S",
          "price": "275",
          "image": "img1",
          "isFavourite": false
      },
      {
          "id": "2",
          "name": "Houndsooth Car Coat",
          "styleNumber": "CR82E6S61R",
          "colour": "Chino Multi",
          "size": "M",
          "price": "300",
          "image": "img2",
          "isFavourite": true
      }
  ]
};

class Cart extends Component {
  constructor(props) {
    super(props);
    console.log(data.productsList.length);
    this.state = {
      count: data.productsList.length,
      bagTotal: 0,
      subTotal: Array(data.productsList.length).fill(0),
      products: data.productsList,
      favourites: []
    }
  }
  getBagTotal(productTotal){
    const bagTotal = productTotal.reduce((total, value) => {
      return total + value;
    });
    this.setState({
      bagTotal: bagTotal
    })
  }

  removeProduct(productId) {
    const {products} = this.state;
    const newProducts = products.filter(product => {
      return product.id != productId
    })
    this.setState({
      products: newProducts,
      count: newProducts.length
    })
  }

  render() {
    const subTotal = this.state.subTotal.slice();
    return (
      <Container>
        <Row>
          <Col lg="9">
            <Row className="mt-3 cart-header">
              <Col lg="10"><div className="h3 font-weight-normal">Your Bag ({this.state.count})</div></Col>
              <Col lg="2"><div className="cart-subtotal font-weight-normal text-uppercase">Subtotal £{this.state.bagTotal}</div></Col>
            </Row>
            <Row>
              <Col lg="12">
                <a className="link small d-none d-xl-block" href="#">Continue Shopping</a>
              </Col>
            </Row>
            <Row>
              <ProductList 
                  products={this.state.products} 
                  subTotal={this.state.subTotal} 
                  handleCartTotal={this.getBagTotal.bind(this)} 
                  handleProductRemove={this.removeProduct.bind(this)} />
            </Row>
          </Col>
          <Col lg="3">
            <OrderSummary cartTotal={this.state.bagTotal} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Cart;
