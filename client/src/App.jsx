import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from '../components/ProductList';
import ProductForm from '../components/ProductForm';

function App() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/products/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSave = async (productData) => {
    if (editingProduct) {
      // Update
      await axios.put(`http://localhost:8000/api/products/${editingProduct.id}/`, productData);
    } else {
      // Create
      await axios.post('http://localhost:8000/api/products/', productData);
    }
    setEditingProduct(null);
    fetchProducts();
  };

  const handleDelete = async (productId) => {
    await axios.delete(`http://localhost:8000/api/products/${productId}/`);
    fetchProducts();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  return (
    <div>
      <h1>CRUD App with React, Django & MySQL</h1>
      <ProductForm onSave={handleSave} productToEdit={editingProduct} />
      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;