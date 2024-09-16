import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SalesOverview from './components/SalesOverview';
import SalesTrends from './components/SalesTrends';
import ProductPerformance from './components/ProductPerformance';
import SearchFilter from './components/SearchFilter';
import TopProduct from './components/TopProduct';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleFilter = ({ searchTerm, priceRange }) => {
    const filtered = data.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    setFilteredData(filtered);
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sales Performance</h1>
      </header>
      <main className="App-main">
        <div className="search-top-container">
        <SalesOverview data={filteredData} />
          <SearchFilter data={data} onFilter={handleFilter} />
        </div>
        <TopProduct data={filteredData} />
        
        <SalesTrends data={filteredData} />
        <ProductPerformance data={filteredData} />
      </main>
    </div>
  );
};

export default App;
