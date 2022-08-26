import { useContext } from "react";
import { ShopContext } from "../context";

function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeOrder,
    incrementQuantity,
    decrimentQuantity,
  } = props;

  const { example } = useContext(ShopContext);
  console.log(example);

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
        onClick={() => incrementQuantity(id)}
      >
        keyboard_arrow_right
      </i>{" "}
      = {price * quantity} руб.
      <span className="secondary-content" onClick={() => removeOrder(id)}>
        <i className="material-icons basket-delete">cancel</i>
      </span>
    </li>
  );
}

export { BasketItem };
