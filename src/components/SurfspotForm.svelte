<script>

import {getContext, onMount} from "svelte";
import {push} from "svelte-spa-router";

const geosurfService = getContext("GeosurfService");

    let collectionList = [];
    let name = "";
    let latitude = 0;
    let longitude = 0;
    let typeOfWave = "";
    let errorMessage = "";
    let message = "Enter All fields to add a spot";

 // onMount(async () => {
 //   collectionList = await geosurfService.getCollections()
 // });

  async function addSurfspot() {
    if (name && latitude && longitude && typeOfWave) {
      const collection = collectionList.find(collection => collection.title && collection._id);
      const surfspot = {
        name: name,
        latitude: latitude,
        longitude: longitude,
        typeOfWave: typeOfWave,
    //    collection: collection._id,
      };
    const success = await geosurfService.addSurfspot(surfspot)
        if (success) {
            await push("/collection/*");    //display the surfspot list upon addition of new surfspot
      } else {
            errorMessage = "Addition of Surfspot not completed - some error occurred";
        }
    }
  }
  
</script>
<form on:click|preventDefault={addSurfspot}>
  <div class="field">
    <label class="label" for="name">Enter SurfSpot Name</label> 
    <input bind:value={name} class="input" id="name" name="name" placeholder="SurfSpot Name" type="text">
  </div>
  <div class="field">
    <label class="label" for="text">Enter Latitude</label>
    <input bind:value={latitude} class="input" type="number" name="latitude" placeholder="Latitude">
  </div>
  <div class="field">
    <label class="label" for="text">Enter Longitude</label>
    <input bind:value={longitude} class="input" type="number" name="longitude" placeholder="Longitude">
   </div>
   <div class="field">
    <label class="label" for="text">Enter Type of Wave</label>
    <input bind:value={typeOfWave} class="input" type="text" name="typeOfWave" placeholder="Type of Wave">
   </div>
    <div class="control">
      <button class="button is-link is-light">Add Surf Spot</button>
    </div>
  <div class="section">
    {message}
  </div>
</form>
