import './App.css';
import axios from "axios";
import React, { useState, useEffect }  from 'react';

function App() {
  const [doggo, SetDoggo] = useState(null);
  //const apiURL = "https://api.thedogapi.com/v1/images/search?breed_id=10&limit=12%5C";
  const apiURL = "https://api.thedogapi.com/v1/images/search";

  const getDogWithAxios = async () => {
    const response = await axios.get(apiURL);
    SetDoggo(response.data);
  };

  function moreInfo(doggo) {
    if(doggo[0].breeds[0]){
      console.log('yes')
      console.log(doggo[0].breeds[0].name)
      return (
        <div class="text">{doggo[0].breeds[0].name}</div>
      )
    } else{
      console.log('no')
      return (
        <div class="text">No Information</div>
      )
    }
  }


  if(doggo === null){
    return (
      <div class="main">
        <p class="title">CODEBASE API DEMO</p>
        <button onClick={getDogWithAxios} class="button" >Gimme Doggies</button>
      </div>
  );}
  else {
    return (
      <div class="main">
        <p class="title-with-image">CODEBASE API DEMO</p>
        <div class="container">
          <img class="image" src= {doggo[0].url} alt="doggo"/>
          <div class="overlay">
            <div class="text">{moreInfo(doggo)}</div>
          </div>
        </div>
        
        <button onClick={getDogWithAxios} class="button-with-image" >Gimme Doggies</button>
      </div>
  );
  }
}

export default App;
