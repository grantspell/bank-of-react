import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DebitsList from './DebitsList'
import AccountBalance from './AccountBalance'

const DebitsView = (props) => {
    return (
        <div>
            <h1>Debits</h1>

            <DebitsList debitsData={props.debitsData} />

            <Link to="/">Home</Link>
        </div>
    )
}

export default DebitsView