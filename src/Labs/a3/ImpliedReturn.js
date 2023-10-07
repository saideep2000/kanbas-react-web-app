import React from 'react';

const ImpiledReturn = () => {
    const multiply = (a, b) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
         <h3>Impiled return</h3>
         fourTimesFive = {fourTimesFive}<br />
         multiply(4, 5) = {multiply(4, 5)}<br />
        </>
    )
}

export default ImpiledReturn