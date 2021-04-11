import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import classes from './ContactData.module.css';
import axios from '../../axios-orders';
import Input from '../../components/UI/Input/Input';

class ContactData extends Component {
    state = {
        orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: ''
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: ''
                },
                eircode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Eircode'
                    },
                    value: ''
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: ''
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Email'
                    },
                    value: ''
                },
                deliveryMethod: {
                    elementType: 'select',
                    elementConfig: {
                        options: [
                            {value: 'fastest', displayValue: 'Fastest'},
                            {value: 'cheapest', displayValue: 'Cheapest'}
                        ]
                    },
                    value: ''
                },
        }
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState( {loading: true})
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price
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
                    <Input elementType="..." elementConfig="..." value="..." />
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