import { React, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Btn from './Btn';

function Counter() {
    const [countClick, setCountClick] = useState(0);
    const btnValueArr = [
        "+1",
        "-5",
        "+10",
        "+15",
        "-20"
    ];

    const click = (e) => {
        const textNum = e.target.textContent;
        if (!textNum) { return; }

        const num = Number(textNum);
        setCountClick(count => count + (num));
    }

    return (
        <div className="mt-5 p-3">
            <h2>Counter:</h2>
            { btnValueArr.map(value => <button onClick={click}>{value}</button>) }
            <Btn value={countClick} />
        </div>
    )
}

export default Counter
