import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const imageSrc = item?.img?.startsWith("/")
    ? `https://hnm-react-router-opal.vercel.app${item.img}`
    : item?.img;
  const showProduct = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <div className="card" onClick={() => showProduct(item.id)}>
      <img src={imageSrc} alt={item?.title} />
      <div className="choice">{item?.choice ? "Conscious choice" : ""}</div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="new-product">{item?.new ? "신제품" : ""}</div>
    </div>
  );
};

export default ProductCard;
