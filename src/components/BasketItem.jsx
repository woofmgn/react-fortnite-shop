import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
  const { id, name, price, quantity } = props;

  const { removeFromBasket, incrimentQuantity, decrimentQuantity } =
    useContext(ShopContext);

  return (
    <li className="collection-item grey lighten-4">
      {name}{" "}
      <i
        className="material-icons set-quantity-icons"
        onClick={() => decrimentQuantity(id)}
      >
        keyboard_arrow_left
      </i>
      {quantity} шт.
      <i
        className="material-icons set-quantity-icons"
        onClick={() => incrimentQuantity(id)}
      >
        keyboard_arrow_right
      </i>{" "}
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i className="material-icons basket-delete">cancel</i>
      </span>
    </li>
  );
}

export { BasketItem };
