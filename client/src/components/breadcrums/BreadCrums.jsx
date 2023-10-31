import React from 'react';
import "./breadcrums.css";
import ArrowIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';

const BreadCrums = (props) => {

    const { product } = props;
  return (
    <div className='breadcrums' >

       Home <ArrowIcon /> Shop <ArrowIcon /> {product.category} <ArrowIcon /> {product.name}
        

    </div>
  )
}

export default BreadCrums;