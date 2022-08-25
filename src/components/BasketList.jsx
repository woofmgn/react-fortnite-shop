import {BasketItem} from './BasketItem'

function BasketList(props) {
  const {
    order = [], 
    handleBasketShow,
    removeOrder,
    incrementQuantity,
    decrimentQuantity} = props;
  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity
  }, 0)

  return (
    <ul className="collection basket-list">
      <li className="collection-item active grey darken-1">Корзина</li>
        {
          order.length ? order.map(item => (
            <BasketItem key={item.id} {...item} removeOrder={removeOrder} incrementQuantity={incrementQuantity} decrimentQuantity={decrimentQuantity}/>
          )) : (
            <li className="collection-item">Корзина пуста</li>
        )}
      <li className="collection-item active grey darken-1">Общая стоимость: {totalPrice} руб.</li>
      <li><button className="secondary-content btn-small btn-pay">ОПЛАТИТЬ</button></li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>close</i>
    </ul>
  )
}

export {BasketList};