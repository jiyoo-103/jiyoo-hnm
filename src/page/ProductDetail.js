import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button, Dropdown, Alert } from "react-bootstrap";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
 const [error, setError] = useState("");
  const { id } = useParams();
 const getProductDetail = async () => {
 try {
 setLoading(true);
 setError("");
 let url = `https://my-json-server.typicode.com/legobitna/hnm-react-router/products/${id}`;
 let response = await fetch(url);
 if (!response.ok) throw new Error("상품 정보를 불러오지 못했습니다");
 let data = await response.json();
 setProduct(data);
 } catch (err) {
 setError(err.message);
 } finally {
 setLoading(false);
 }
 };
 useEffect(() => {
 getProductDetail();
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [id]);
  if (loading || product == null) return <h1>Loading</h1>;
  const imageSrc = product?.img?.startsWith("/")
    ? `https://hnm-react-router-opal.vercel.app${product.img}`
    : product?.img;
  return (
    <Container className="product-detail-card">
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          <Col xs={12} md={6} className="product-detail-img">
 <img src={imageSrc} alt={product.title} />
          </Col>
          <Col xs={12} md={6}>
            <div className="product-info">{product.title}</div>
            <div className="product-info">₩ {product.price}</div>
            <div className="choice">
              {product.choice ? "Conscious choice" : ""}
            </div>
            <Dropdown className="drop-down">
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {product?.size.length > 0 &&
                  product.size.map((item) => (
                    <Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <Button variant="dark" className="add-button">
              추가
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default ProductDetail;
