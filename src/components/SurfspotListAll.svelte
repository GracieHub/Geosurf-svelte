<script>
  import {getContext, onMount} from 'svelte'

  const geosurfService = getContext("GeosurfService");
  let surfspotList = [];

  onMount(async () => {
    surfspotList = await geosurfService.getSurfspots();
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