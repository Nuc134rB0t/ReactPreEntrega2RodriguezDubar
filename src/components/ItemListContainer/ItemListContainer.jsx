//* Items para la venta

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsCategory } from '../../assets/mock/itemsmock';
import ItemList from '../ItemList/ItemList';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting, suggestion }) => {
  const [productos, setProductos] = useState([]);

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcion = idCategoria ? getProductsCategory : getProducts;

    funcion(idCategoria).then((res) => setProductos(res));
  }, [idCategoria]);

  return (
    <>
      <h1>{greeting}</h1>
      <h2>{suggestion}</h2>
      <ItemList productos={productos} />
    </>
  );
};

//* Corregir alertas de EsLint
ItemListContainer.propTypes = {
  greeting: PropTypes.string, // Indica que greeting es requerido y puede ser una cadena (string).
  suggestion: PropTypes.string, // Indica que suggestion no es requerido y puede ser una cadena (string) o estar ausente.
};

export default ItemListContainer;
