import React, { Component } from 'react';

const Debit = (props) => {
    return (
        <div>
            <span>Description: {props.description}</span>
            <span>Amount: ${props.amount}</span>
            <span>Date: {props.date}</span>
        </div>
    )
}

export default Debit;