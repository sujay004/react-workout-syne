import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const counter = useSelector(state=>state.count)
    return (
        <div>
            Counter value :{counter}
        </div>
    );
}

export default Counter;
