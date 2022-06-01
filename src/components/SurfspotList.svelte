<script>
    import {getContext, onMount} from 'svelte'

    const geosurfService = getContext("GeosurfService");
    let surfspotList = [];
    let url = ``;
  
    onMount(async (request) => {
      url = window.location.href
      console.log(url)
      let parsedURL = url.substring(35)
      surfspotList = await geosurfService.getSurfspotsByCategoryId(parsedURL);
      console.log(surfspotList)
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
          <td>
           <a href="/#/surfspot/{surfspots._id}" class=“button”>
            <span class="icon is-small">
             <i class="fas fa-folder-open"></i>
            </span>
            </a>
          </td>
        </tr>
        {/each}
    </tbody>
</table>