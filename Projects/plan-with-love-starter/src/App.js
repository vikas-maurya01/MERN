import React, { useState } from "react";
import data from "./data.js"
import Tour from "./components/Tour.js"


const App = () => {

  const [tours , setTours]=useState(data);

  function removeTour(id){
    const newTour= tours.filter(tour=> tour.id !== id)
    setTours(newTour);

  }

  function refresh(){
    setTours(data);
  }

  if(tours.length===0){
    return(
      <>
      <h1>No Tour Left</h1>
      <button onClick={refresh}>refresh</button>
      </>

    )
  }

  return (
    <Tour tours={tours} updatedTour={removeTour}/>
  )
};

export default App;
