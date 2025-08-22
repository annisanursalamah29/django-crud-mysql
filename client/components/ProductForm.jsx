import React, { useState, useEffect } from 'react';

function ProductForm({ onSave, productToEdit }) {
  // Menggunakan state untuk mengelola input formulir
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: ''
  });

  // Efek ini akan berjalan setiap kali `productToEdit` berubah
  // Ini untuk mengisi formulir saat pengguna mengklik tombol "Edit"
  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
    } else {
      // Mengatur ulang formulir jika tidak ada produk yang diedit
      setProduct({
        name: '',
        description: '',
        price: ''
      });
    }
  }, [productToEdit]);

  // Handler untuk perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Handler saat formulir disubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(product);
  };

  return (
    <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>{productToEdit ? 'Edit Produk' : 'Tambah Produk Baru'}</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Nama Produk:
            <input
              type="text"
              name="name"
              value={product.name}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Deskripsi:
            <textarea
              name="description"
              value={product.description}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
              required
            ></textarea>
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Harga:
            <input
              type="number"
              name="price"
              value={product.price}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px' }}
              required
            />
          </label>
        </div>
        <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
          {productToEdit ? 'Simpan Perubahan' : 'Tambahkan Produk'}
        </button>
      </form>
    </div>
  );
}

export default ProductForm;