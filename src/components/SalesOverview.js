import React from 'react';
import { motion } from 'framer-motion';
import './Chart.css'; 

const SalesOverview = ({ data = [] }) => {
  const totalSales = data.reduce((sum, product) => sum + product.price, 0);
  const averagePrice = totalSales / data.length;

  return (
    <motion.div 
      className="sales-overview-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2>Sales Overview</h2>
      <div className="overview-metrics">
        <div className="metric-box">
          <p><strong>Total Sales:</strong> ${totalSales.toFixed(2)}</p>
        </div>
        <div className="metric-box">
          <p><strong>Average Price:</strong> ${averagePrice.toFixed(2)}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SalesOverview;
