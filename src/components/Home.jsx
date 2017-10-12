import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>&#x2302;</h1>
                <h1>HOME</h1>
                
                <Link to="/user">User Page</Link>
                <br />
                <Link to="/account">Account Page</Link>
                <br />
                <Link to="/debit">Debit Account Transactions</Link>
                <br />
                <Link to="/credit">Credit Account Transactions</Link>
            </div>
        );
    }
}

export default Home