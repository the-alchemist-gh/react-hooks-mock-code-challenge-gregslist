import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({datas, deleteItem}) {
  return (
    <main>
      <ul className="cards">
        {
          datas.map((data)=>(
            <ListingCard key={data.id} deleteItem = {deleteItem} cardData={data} />
          ))
        }
      </ul>
    </main>
  );
}

export default ListingsContainer;
