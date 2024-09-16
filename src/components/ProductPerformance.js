import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { motion } from 'framer-motion';
import './Chart.css';

const ProductPerformance = ({ data }) => {
  const productData = data.map(item => ({
    name: item.title,
    sales: item.price
  }));


  return (
    <motion.div 
      className="chart-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3>Product Performance</h3>
      <div className="bar-chart-container">
        <BarChart width={600} height={300} data={productData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#8884d8" />
        </BarChart>
      </div>
    </motion.div>
  );
};

export default ProductPerformance;
