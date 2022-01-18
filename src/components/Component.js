import React from 'react';

function threeLines(address) {
    let byComma = address.split(',')
    let second = byComma.pop().split(' ')
    let last = second.pop()
    return [byComma, second.join(' ').trim(' '), last]
}

function Component({ address, displayLines }) {
    const lines = {
        1: [address],
        2: address.split(','),
        3: threeLines(address)
    }  
    return (lines[displayLines].map((line, index) => <div key={index}>{line}</div>))
}

export default Component