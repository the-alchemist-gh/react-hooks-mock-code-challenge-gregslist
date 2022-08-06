import React,{useState} from "react";

function ListingCard({cardData, deleteItem}) {
  const [btnClick, setBtnClick] = useState(false)

  function handleClick(){
    setBtnClick(btnClick=>!btnClick)
  }

  function handleDelete(){
    
    deleteItem(cardData.id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={cardData.image} alt={cardData.description} />
      </div>
      <div className="details">
        {btnClick ? (
          <button onClick={handleClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{cardData.description}</strong>
        <span> · {cardData.location}</span>
        <button onClick={handleDelete} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
