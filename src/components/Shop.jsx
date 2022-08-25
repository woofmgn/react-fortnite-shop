import {useState, useEffect} from 'react';
import {apiKey, apiUrl} from '../config'
import {Preloader} from './Preloader'
import {GoodsList} from './GoodsList'
import {Cart} from './Cart'
import {BasketList} from './BasketList'

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([])
  const [isBasketShow, setBasketShow] = useState(false);

  const addOrder = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if(itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if(index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });
    setOrder(newOrder);
    }
  }

  const removeOrder = (itemId) => {
    const newOrder = order.filter(el => el.id !== itemId);
    setOrder(newOrder);
  }

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  }

  const incrementQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuantity = el.quantity + 1;
        return {
          ...el,
          quantity: newQuantity,
        }
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  }

  const decrimentQuantity = (itemId) => {
    const newOrder = order.map(el => {
      if(el.id === itemId) {
        const newQuantity = el.quantity - 1;
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0,
        }
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  }



  useEffect(function getGoods() {
    fetch(apiUrl, {
      headers: {
        'Authorization': apiKey,
      },
    })
      .then(res => res.json())
      .then(data => {
        data.featured && setGoods(data.featured);
        setLoading(false);
      })
  }, [])

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow}/>
      {
        loading ? <Preloader /> : <GoodsList goods={goods} addOrder={addOrder}/>
      }
      {
        isBasketShow && <BasketList order={order} handleBasketShow={handleBasketShow} removeOrder={removeOrder} incrementQuantity={incrementQuantity} decrimentQuantity={decrimentQuantity}/>
      }
    </main>
  )
}

export {Shop};