import { useState } from 'react';

const Ghadi = () => {
let date = new Date().toLocaleTimeString();
    const [ghadi,setGhadi] = useState(date);
    const t = () => {
    date = new Date().toLocaleTimeString();
    setGhadi(date);
    };
    setInterval(t,1000);
    return (<>
    {ghadi}
    </>);
}

export default Ghadi;