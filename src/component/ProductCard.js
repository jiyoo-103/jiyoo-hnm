import React from 'react'
import {useNavigate} from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = ()=>{
    navigate(`/product/${item.id}`);
  }

  return (
    <div className="card" onClick={showDetail}>
        <img className='product-img' src={item.img} alt={item.title} />
        {item.choice === true ? <div>Conscious choice</div> : null}
        <div>{item.title}</div>
        <div>{item.price}원</div>
        {item.new === true ? <div>신제품</div> : null}
    </div>
  )
}

export default ProductCard