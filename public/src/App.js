import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {
    Container,
    Navbar} from 'react-bootstrap';
import createStore from './redux'
import ProductList from './containers/ProductList/ProductList'


export  default class App extends Component {
    render() {
        return (
            <Provider store={createStore()}>
                <div>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand href="#home">Font Store</Navbar.Brand>

                    </Navbar>
                </div>
                <Container>
                    <ProductList/>
                </Container>
            </Provider>
        )
    }
}