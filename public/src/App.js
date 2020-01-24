import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
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
                    <Navbar.Brand href="/ec">Store</Navbar.Brand>
                </Navbar>
                <HashRouter>
                    <Container>
                        <Route
                            path={'/'}
                            exact
                            component={ProductList} />
                        <Route
                            path={'/product/detail/:id'}
                            exact
                            component={ProductDetail} />
                        <Route
                            path={'/success'}
                            exact
                            component={SuccessPurchase} />
                    </Container>
                </HashRouter>

            </Provider>
        )
    }
}
