<script>
    import {getContext, onMount} from 'svelte'
    import {push} from "svelte-spa-router";
    import {collection} from "../stores";

    
    const geosurfService = getContext("GeosurfService");
    let surfspotList = [];

  
    onMount(async () => {
      surfspotList = await geosurfService.getCollectionSurfspots($collection.id);
      console.log("currently in surfspot list by specific collection")
      console.log(surfspotList);
    });
  </script>
  
  <table class="table is-fullwidth">
    <thead>
      <th>SurfSpot Name</th>
      <th>Latitude</th>
      <th>Longitude</th>
      <th>Type of Wave</th>
    </thead>
    <tbody>
      {#each surfspotList as surfspots}
        <tr>
          <td>
            {surfspots.name}
          </td>
          <td>
            {surfspots.latitude}
          </td>
          <td>
            {surfspots.longitude}
          </td>
          <td>
           {surfspots.typeOfWave}
          </td>
        </tr>
      {/each}
    </tbody>
  </table>