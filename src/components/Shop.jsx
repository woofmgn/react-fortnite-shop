import {useState, useEffect} from 'react';
import {apiKey, apiUrl} from '../config'
import {Preloader} from './Preloader'
import {GoodsList} from './GoodsList'

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

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
        console.log(data.featured)
      })
  }, [])

  return (
    <main className="container content">
      {
        loading ? <Preloader /> : <GoodsList goods={goods} />
      }
    </main>
  )
}

export {Shop};