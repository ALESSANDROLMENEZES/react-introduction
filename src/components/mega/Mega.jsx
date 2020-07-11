import React,{useState} from 'react';
import Panel from './Panel';
import Button from './Button';
import data from './../../data/mega';

const Mega = (props) => {
    let [nrs, setNrs] = useState(data(props.limite));

    const generateNew = () => {
        setNrs(data(props.limite));
    };

    return (
        <>
            <Panel numbers={nrs} />
            <Button generate={generateNew} />
        </>
    );
};

export default Mega;