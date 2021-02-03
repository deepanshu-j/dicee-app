import react from 'react';
import './Die.css';

import logo1 from './dice-one-solid.svg';
import logo2 from './dice-two-solid.svg';
import logo3 from './dice-three-solid.svg';
import logo4 from './dice-four-solid.svg';
import logo5 from './dice-five-solid.svg';
import logo6 from './dice-six-solid.svg';

function Die(props){
    let num=props.num;
    let isRolling=props.rolling;
    let logoArr=[logo1,logo2,logo3,logo4,logo5,logo6];
    return(
        <div>
            {/* {num} */}
            <img src={logoArr[num-1]} alt="Dice Logo" className={`DieLogo ${isRolling?'shaking':''}`} />

        </div>
    );

}

export default Die;