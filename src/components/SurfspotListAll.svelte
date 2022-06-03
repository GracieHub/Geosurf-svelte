<script>
  import {getContext, onMount} from 'svelte'

  const geosurfService = getContext("GeosurfService");
  let surfspotListAll = [];

  onMount(async () => {
    surfspotListAll = await geosurfService.getSurfspots();
  });
</script>

<table class="table is-fullwidth" style="background-color:#B0E0E6">
  <thead>
    <th>SurfSpot Name</th>
    <th>Latitude</th>
    <th>Longitude</th>
    <th>Type of Wave</th>
  </thead>
  <tbody>
    {#each surfspotListAll as surfspots}
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