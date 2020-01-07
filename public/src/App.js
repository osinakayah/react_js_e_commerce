import React, { Component } from 'react';
import { BrowserRouter, Route, } from 'react-router-dom';
import {Provider} from 'react-redux'
import {Container, Navbar} from 'react-bootstrap';
import createStore from './redux'
import ProductList from './containers/ProductList/ProductList'
import ProductDetail from './containers/ProductDetail/ProductDetail'
import SuccessPurchase from './containers/SuccessPurchase/SuccessPurchase'


export  default class App extends Component {
    render() {
        return (
            <Provider store={createStore()}>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Font Store</Navbar.Brand>
                </Navbar>
                <BrowserRouter>
                    <Container>
                        <Route
                            path={'/'}
                            exact
                            component={ProductList} />
                        <Route
                            path={'/product/:id'}
                            exact
                            component={ProductDetail} />
                        <Route
                            path={'/success'}
                            exact
                            component={SuccessPurchase} />
                    </Container>
                </BrowserRouter>

            </Provider>
        )
    }
}
