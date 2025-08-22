import React from 'react';

function ProductList({ products, onEdit, onDelete }) {
  return (
    <div>
      <h2>Daftar Produk</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {products.map(product => (
          <li
            key={product.id}
            style={{
              marginBottom: '10px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p><strong>Harga:</strong> ${product.price}</p>
            </div>
            <div>
              <button
                onClick={() => onEdit(product)}
                style={{
                  marginRight: '10px',
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(product.id)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#dc3545',
                  color: 'white',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer'
                }}
              >
                Hapus
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;