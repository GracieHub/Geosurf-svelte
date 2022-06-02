<script>

import {createEventDispatcher,getContext, onMount} from "svelte";
import Coordinates from "./Coordinates.svelte";

const dispatch = createEventDispatcher();

    let collectionList = [];
    let name = "";
    let latitude = 52.160858;
    let longitude = -7.152420;
    let typeOfWave = ["Beginner", "Intermediate", "Advanced", "Pro"];
    let errorMessage = "";
    let message = "Enter All fields to add a spot";
    let selectedTypeOfWave = "";


const geosurfService = getContext("GeosurfService");

  onMount(async () => {
    collectionList = await geosurfService.getCollections()
  });

  async function addSurfspot() {
    if (name && latitude && longitude && typeOfWave) {
      const collection = collectionList.find(collection => collection.title);
      const surfspot = {
        name: name,
        latitude: latitude,
        longitude: longitude,
        typeOfWave: selectedTypeOfWave,
        collection: collection._id,
      };
    const success = await geosurfService.addSurfspot(surfspot)
        if (success) {
          message = `You added ${name} to the ${collection.title} Collection`
          dispatch("message");
          return;
      //    await push("/dashboard");             //display the colleciton list upon addition of new collection
          } else {
              errorMessage = "error adding Collection";

        }
      }
  }

  
</script>
<form on:submit|preventDefault={addSurfspot}>
  <div class="field">
    <label class="label" for="name">Enter SurfSpot Name</label> 
    <input bind:value={name} class="input" id="name" name="name" placeholder="SurfSpot Name" type="text">
  </div>
  <div class="field">
    <div class="control">
      {#each typeOfWave as typeOfWave}
        <input bind:group={selectedTypeOfWave} class="radio" type="radio" value="{typeOfWave}"> {typeOfWave}
      {/each}
    </div>
  </div>
   <div>
   <Coordinates bind:lat={latitude} bind:lng={longitude}/>
   </div>
    <div class="control">
      <button class="button is-link is-light">Add Surf Spot</button>
    </div>
  <div class="section">
    {message}
  </div>
</form>
