<script>
    import {getContext, onMount} from 'svelte'

    const geosurfService = getContext("GeosurfService");
    let surfspotList = [];
    let url = ``;
    let errorMessage ='';
    let id = "";
  
    onMount(async (request) => {
      url = window.location.href
      console.log(url)
      let parsedURL = url.substring(35)
      surfspotList = await geosurfService.getSurfspotsByCollectionId(parsedURL);
      console.log(surfspotList)
  });

  async function deleteHandler(id) {         //tried bu not working.. see release 3 for html code also in form below
        url = window.location.href
        let parsedURL = url.substring(35)
        const success = await geosurfService.deleteSurfspot(parsedURL)
        if (success) {
            surfspotList = await geosurfService.getSurfspots();   //refreshes the list
        } else {
            errorMessage = "Error Deleting Surf Spot";
        }
    }

//  code that was taken out of form below  <button on:click={deleteHandler(surfspots._id)} class="fas fa-trash-alt" style="color:red" title="delete"></button>


</script>
  <table class="table is-fullwidth" style="background-color:#bfe7f2">
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
          <td>
           <a href="/#/surfspot/{surfspots._id}" class=“button”>
            <span class="icon is-large">
             <i class="fas fa-map-marker-alt teal-color" style="font-size:35px;"></i>
            </span>
            </a>
          </td>
        </tr>
        {/each}
    </tbody>
</table>