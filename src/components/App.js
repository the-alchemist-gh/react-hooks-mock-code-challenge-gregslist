import React,{useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";


function App() {
  const [pageData, setPageData] = useState([])

  useEffect(()=>{
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(data=>setPageData(data))
  },[])

  function removeList(id){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE"
    })
    const newPageData = pageData.filter((pdata)=>
      pdata.id !== id
    )

    setPageData(newPageData);

  }

  function searchList(value){
    const searchPage = pageData.filter((pdata)=>pdata.description.toLowerCase().includes(value.toLowerCase()));
    setPageData(searchPage)
  }


  return (
    <div className="app">
      <Header handleFilter={searchList} />
      <ListingsContainer deleteItem={removeList} datas = {pageData} />
    </div>
  );
}

export default App;
