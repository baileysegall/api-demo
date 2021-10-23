//Necessary import statements 
import './App.css';
import axios from "axios";
import React, { useState }  from 'react';

//The App function is the main output function which all the main code is stored in
// in a more complex application may have multiple components used together
function App() {
  //if we use let the variable will not persist within internal functions
  //initialize as null
  const [doggo, SetDoggo] = useState(null);
  //link api link -> every time called givees a new object
  const apiURL = "https://api.thedogapi.com/v1/images/search";

  //Calls api linke (gets new object) sets Doggo to new object
  const getDogWithAxios = async () => {
    //async function allows us not to excede depth my calling function constantly as with useEffect
    const response = await axios.get(apiURL);
    SetDoggo(response.data);
  };

  //Handles getting more info for the hover
  function moreInfo(doggo) {
    //checks if the breeds table exists within the dog object
    if(doggo[0].breeds[0]){
      //if the table exists display the name in the hover
      return (
        <div class="text">{doggo[0].breeds[0].name}</div>
      )
    } else{
      //if the table doesn't exist.. display no information
      return (
        <div class="text">No Information</div>
      )
    }
  }


  //If doggo is not updated (the button has not been clicked) return no image
  if(doggo === null){
    return (
      <div class="main">
        <p class="title">CODEBASE API DEMO</p>
        {/* when button is called called url function */}
        <button onClick={getDogWithAxios} class="button" >Gimme Doggies</button>
      </div>
  );}
  //if the doggo is updated render the image and the hover component
  else {
    return (
      <div class="main">
        <p class="title-with-image">CODEBASE API DEMO</p>
        <div class="container">
          {/* Render image from url */}
          <img class="image" src= {doggo[0].url} alt="doggo"/>
          <div class="overlay">
            {/* calls more information to display  */}
            <div class="text">{moreInfo(doggo)}</div>
          </div>
        </div>
        
        <button onClick={getDogWithAxios} class="button-with-image" >Gimme Doggies</button>
      </div>
  );
  }
}
//exports the app
export default App;
