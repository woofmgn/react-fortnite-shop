function GoodsItem(props) {
  const {
    id,
    name,
    description,
    price,
    full_background
  } = props;

  return (
    <div className="card" id={id}>
      <div className="card-image">
        <img src={full_background} alt={name}/>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
          <span className="left">{price}</span>
          <button className="btn right">Buy</button>
      </div>
    </div>
  )
}

export {GoodsItem};