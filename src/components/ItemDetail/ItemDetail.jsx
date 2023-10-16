import React from 'react';

const ItemDetail = ({ id, idCategory, title, description, img, stock, price }) => {
  return (
    <>
    <div className='row justify-content-md-center my-2'>
      <div className='col-4'>
        <div className='card'>
          <img className='card-img-top' src={img} alt='Card iemage cap' />
          <div className='card-body'>
            <h3 className='card-title'>{title}</h3>
            <h4 className='card-subtitle mb-2 text-muted'>{description}</h4>
            <h5 className='card-text'>Stock: {stock} Unidades</h5>
            <h5 className='card-text'>Precio: {price} US$</h5>
            <p className='card-text'>Cód. Producto: {id}</p>
            <p className='card-text'>Cód. Categoría: {idCategory}</p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
};

export default ItemDetail;
