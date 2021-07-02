import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel, Container, Image, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader';
import Message from './Message';
import { listTopProducts } from '../actions/productActions';

const ProductCarousel = () => {
  const dispatch = useDispatch();

  const productTopRated = useSelector((state) => state.productTopRated);
  const { loading, error, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error}</Message>
  ) : (
    <Carousel className='carou' pause='hover' className='bg-dark'>
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <img
            className='d-block w-100'
            src={product.image}
            alt={product.name}
          />
          <Carousel.Caption className='carousel-caption'>
            <h3>
              {product.name} (${product.price})
            </h3>
          </Carousel.Caption>
          {/* <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className='carousel-caption'>
              <h2>
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          </Link> */}
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProductCarousel;
