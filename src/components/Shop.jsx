import {useState, useEffect} from 'react';
import {apiKey, apiUrl} from '../config'
import {Preloader} from './Preloader'
import {GoodsList} from './GoodsList'
import {Cart} from './Cart'

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([])

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
      <Cart quantity={order.length}/>
      {
        loading ? <Preloader /> : <GoodsList goods={goods} addOrder={addOrder}/>
      }
    </main>
  )
}

export {Shop};