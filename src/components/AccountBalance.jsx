import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

// IMPORT COMPONENTS
import Debit from './Debit'
import Credit from './Credit'

class AccountBalance extends Component {
    state = {
        redirectToHome: false

    }



    saveSomething = () => {
        console.log('Clicked')


        setTimeout = (() => {
            this.setState({ redirectToHome: true })
        }, 1500)
    }

    render() {

        return (
            <div>
                Your balance is {this.props.accountBalance}

                <br />
                <br />

            

                <br/>

                <button onClick={this.saveSomething}>Redirect Button</button>

                <Link to="/">Home</Link>
            </div>
        );
    }
}

    export default AccountBalance
