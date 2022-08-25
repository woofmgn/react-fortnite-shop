function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background,
    addOrder
  } = props;

  return (
    <div className="card card-flex">
      <div className="card-image">
        <img src={full_background} alt={name}/>
        
      </div>
      <div className="card-content">
        <span className="card-title">{name}</span>
        <p>{description}</p>
      </div>
      <div className="card-action">
          <span className="left">{price} руб.</span>
          <button className="btn right" onClick={() => addOrder({id, name, price})}>КУПИТЬ</button>
      </div>
    </div>
  )
}

export {GoodsItem};