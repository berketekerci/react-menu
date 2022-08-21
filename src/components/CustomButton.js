import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import {PRIMARY} from '../theme/colors';




const CustomButton = ({children ,onClick, text = 'Buton', type = PRIMARY}) => {
    return ( 
        <button text={text} onClick={onClick} color="red" style={style}>
            {children}
        </button>
     );
}
const style={
    width:"80px",
    height:"30px",
    color:PRIMARY,
    text:"white"

}
 
export default CustomButton;