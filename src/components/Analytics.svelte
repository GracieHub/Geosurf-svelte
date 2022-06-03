<script>
    import {getContext, onMount} from 'svelte';
    import TramoreBeach from "/src/assets/TramoreBeach5.jpg";


    const geosurfService = getContext("GeosurfService");
    let surfspotList = [];
    let collectionList = [];
    let userList = [];
    let surfspotCount = 0;
    let userCount = 0;
    let collectionCount = 0;
    
    // looking for the number of surfspots, collections and users 
    onMount(async () => {     
        surfspotList = await geosurfService.getSurfspots();
        surfspotCount = surfspotList.length;
        collectionList = await geosurfService.getCollections();
        collectionCount = collectionList.length;
        userList = await geosurfService.getUsers();
        userCount = userList.length;
    });
</script>

<style>
h1 {text-align: center; color:red; font-family: courier;
}
</style>
<h1>Geosurf App Analytics</h1>
<table class="table is-fullwidth" style="background-color:#B0E0E6"> 
    
    <thead>
      <th>Current Users</th>
      <th>Surfspots</th>
      <th>Collections</th>
    </thead>
    <tbody>
        <tr>
          <td>
            {userCount}
          </td>
          <td>
            {surfspotCount}
          </td>
          <td>
            {collectionCount} 
          </td>
        </tr>
    </tbody>
  </table>