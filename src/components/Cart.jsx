function Cart(props) {
  const {quantity = 0, handleBasketShow} = props;

  return (
    <div className="cart  black white-text" onClick={handleBasketShow}>
      <i className="material-icons">local_grocery_store</i>
      {quantity ? 
      <span className="cart-quantity">{quantity}</span> 
      : null}
    </div>
  )
}

export {Cart};