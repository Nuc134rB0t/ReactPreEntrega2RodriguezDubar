//* Carrito de compras del NarBar

const CartWidget = () => {
  return (
    <>
      <div class='btn-primary position-relative mx-4 mt-1'>
        <a href="./index.html" target="_self" rel="noopener noreferrer"><img src='./media/img/ecom/shopping-cart-blue.png' height='45px' alt='' /></a>
        <span class='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>
          99+
          <span class='visually-hidden'>unread messages</span>
        </span>
      </div>
    </>
  );
};

export default CartWidget;
