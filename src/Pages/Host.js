import React from 'react';
import './Style.css'
import pcImage from '../Assets/Images/pc.svg';

const MyComponent = () => {


  return (
    <div>
    <div className='box1'>
<h6>Host</h6>

<div className='items'>
<div className='hostbox text-center'>
<img src={pcImage} alt="pc_image" />
<p className='tag'>VM Scale</p>
</div>

<div className='hostbox text-center'>
<img src={pcImage} alt="pc_image" />
<p className='tag'>VM Scale</p>
</div>
</div>
    </div>
    </div>
  );
};

export default MyComponent;
