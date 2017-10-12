import React from 'react';

import Debit from './Debit'

const DebitsList = (props) => {
    
    const debitComponents = props.debitsData.map((debit, index) => {
        return <Debit
            description={debit.description}
            amount={debit.amount}
            date={debit.date}
            key={index}
            index={index} />;
    });

    return (
        <div>
            {debitComponents}
        </div>
    );
};

export default DebitsList;