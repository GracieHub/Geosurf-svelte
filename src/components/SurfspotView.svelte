<script>
    import {getContext, onMount} from 'svelte'
    import {surfspot} from "../stores";

    const geosurfService = getContext("GeosurfService");
    
    let surfspotBySurfspotId = [];
    let url = ``;

    onMount(async (request) => {
        url = window.location.href
        console.log(url)
        let parsedURL = url.substring(33)
        surfspotBySurfspotId  = await geosurfService.getSurfspotBySurfspotId(parsedURL);
        console.log(surfspotBySurfspotId)
    });
</script>

<table class="table is-fullwidth">
  <thead>
    <th>Name</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Type of Wave</th>    
    <th>SurfSpot I.D</th>
  </thead>
  <tbody>
      <tr>
        <td>
          {$surfspot.name}
        </td>
        <td>
          {$surfspot.latitude}
        </td>
        <td>
            {$surfspot.longitude}
          </td>
        <td>
          {$surfspot.typeOfWave}
        </td>
        <td>
            {$surfspot.id}
          </td>
      </tr>
  </tbody>
</table>

