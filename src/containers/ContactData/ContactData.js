import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../axios-orders';
import Input from '../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState( {loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Colm Faherty',
                address: {
                   street: 'Walnut Avenue',
                   eircode: 'D05 5555',
                   country: 'Ireland'
                },
                email: 'test@test.com',
                deliveryMethod: 'fastest'
            }
        }
        axios.post('/orders.json', order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push('/');
        }
        )
        .catch(error => {
            this.setState({loading: false});
        }
        )
    }

    render() {
        let form = (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                <form>
                    <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                    <Input inputtype="input" type="text" name="email" placeholder="Your Mail" />
                    <Input inputtype="input" type="text" name="street" placeholder="Street" />
                    <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
                </form>
            </div>
        )
        if (this.state.loading) {
            form = <Spinner />;
        }
        return form;
    }
}

export default ContactData;