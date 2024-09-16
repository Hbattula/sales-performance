import React from 'react';
import Slider from 'react-slick';
import './TopProduct.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopProduct = ({ data = [] }) => {
  const sortedData = [...data].sort((a, b) => b.sales - a.sales).slice(0, 5);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="top-products">
      <h2>Top Products</h2>
      <Slider {...settings}>
        {sortedData.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.title} />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p><strong>Sales:</strong> {product.sales}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopProduct;
