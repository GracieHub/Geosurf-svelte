<script>
    import {getContext, onMount} from "svelte";
    import {push} from "svelte-spa-router";
  

    let title = "";
    let message = "Enter Name of your new Collection of SurfSpots";
    let errorMessage = "";
    
    const geosurfService = getContext("GeosurfService");

    async function addCollection() {
      let success = await geosurfService.addCollection(title)
          if (success) {
             await push("/dashboard");             //display the colleciton list upon addition of new collection
          } else {
              errorMessage = "error adding Collection";
          }
      }
  </script>

  <form on:submit|preventDefault={addCollection}>
    <div class="field">
      <label class="label" for="name">Enter Collection Name</label> 
      <input bind:value={title} class="input" id="name" name="name" placeholder="Collection Name" type="text">
    </div>
      <div class="field is-grouped">
        <button class="button is-link is-light">Add Collection</button>
    <div class="section"></div>
      {message}
    </div>
  </form>