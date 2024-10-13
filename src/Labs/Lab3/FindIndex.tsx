import React from 'react';

const FindIndexComponent=() => {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    return (
        <div>
            <p>fourIndex= {fourIndex}</p>
            <p>string3Index: {string3Index}</p>
        </div>
    );
};

export default FindIndexComponent;