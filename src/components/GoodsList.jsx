import {GoodsItem} from './GoodsItem'

function GoodsList(props) {
  const {goods =[], addOrder} = props;

  if(!goods.length){
    return (
      <h3>Nothing found</h3>
    )
  }

  return (
    <div className="goods">
      {goods.map(good => (
        <GoodsItem key={good.id} {...good} addOrder={addOrder}/>
      ))}
    </div>
  )
}

export {GoodsList};