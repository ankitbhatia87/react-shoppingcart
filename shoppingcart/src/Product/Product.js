import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Product.css';

class Product extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            //subTotal: this.props.subTotal,
            productTotal: 0,
            favouriteLinkText: this.getLinkText(this.props.isFavourite)
        }
    }

    getLinkText() {
        if (this.props.isFavourite) {
            return 'Remove from Favourites'
        } else {
            return 'Add to Favourites'
        }
    }

    changeQuantity(e) {
        const productTotal = this.props.price * e.target.selectedOptions[0].value;
        const subTotal = this.props.subTotal.slice();
        subTotal[parseInt(this.props.id) - 1] = productTotal;
        this.props.subTotal[parseInt(this.props.id) - 1] = productTotal;
        this.state.productTotal = productTotal;
        this.props.handleTotal(this.props.subTotal);
    }

    toggleFavourites() {
        if (this.props.isFavourite) {
            this.setState({
                favouriteLinkText: this.setLinkText(),
                isFavourite: false
            })
        } else {
            this.setState({
                favouriteLinkText: this.setLinkText(),
                isFavourite: true
            })
        }
    }

    setLinkText() {
        if (this.props.isFavourite) {
            return "Add To Favourites"
        } else {
            return "Remove From Favourites"
        }
    }

    removeProduct() {
        this.props.handleRemove(this.props.id);
    }

    render() {
        let props = this.props;
        return (
            <Row className="pt-3 pb-3 border-bottom">
                <Col sm="12" lg="9">
                    <Row>
                        <Col xs="4" md="4" lg="4">
                            <img src={"../assets/"+props.image+".jpg"} className="img-fluid" />
                        </Col>
                        <Col xs="8" md="4" lg="8">
                            <div className="product-name mb-4 h5">{props.name}</div>
                            <div className="product-details small">
                                <div className="pb-2">Style # {props.styleNumber}</div>
                                <div>Colour: {props.colour}</div>
                                <div>Size: {props.size}</div>
                            </div>
                            <Col lg="12" className="mt-4 d-none d-lg-block">
                                <Row className="small">
                                    <button className="text-uppercase p-0 mr-5" 
                                    onClick={this.toggleFavourites.bind(this)}>{this.state.favouriteLinkText}</button>
                                    <button className="text-uppercase p-0 mr-4">edit</button>
                                    <button className="text-uppercase p-0" onClick={this.removeProduct.bind(this)}>remove</button>
                                </Row>
                            </Col>
                        </Col>
                    </Row>
                </Col>
                <Col lg="1">{props.price}</Col>
                <Col lg="1">
                <select onChange={this.changeQuantity.bind(this)}>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </Col>
                <Col lg="1" className="text-right">
                    {this.state.productTotal}
                </Col>
                <Col lg="12" className="mt-4 d-block d-sm-none">
                    <Row className="small">
                        <Col xs="9"><button className="text-uppercase p-0 mr-5" onClick={this.toggleFavourites.bind(this)}>{this.state.favouriteLinkText}</button></Col>
                        <Col xs="3">
                            <button className="text-uppercase text-right p-0 mr-4 btn-edit">edit</button>
                            <button className="text-uppercase text-right p-0 btn-remove" onClick={this.removeProduct.bind(this)}>remove</button>
                        </Col>
                    </Row>
                </Col>
            </Row>

        )
    }
}

export default Product;