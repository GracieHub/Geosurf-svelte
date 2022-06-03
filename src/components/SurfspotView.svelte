<!-- image upload code Reference from https://svelte.dev/repl/b17c13d4f1bb40799ccf09e0841ddd90?version=3.29.0 -->

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

    let  avatar, fileinput;
	
	const onFileSelected =(e)=>{
  let image = e.target.files[0];
            let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
}
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
<div id="app">
	<h1>Upload an Image of {$surfspot.name} </h1>
  
        {#if avatar}
        <img class="avatar" src="{avatar}" alt="d" />
        {:else}
        <img class="avatar" src="https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-512.png" alt="" /> 
        {/if}
				<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
        <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image From you Device</div>
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >

</div>
<style>
	#app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
}
 
	.upload{
		display:flex;
	height:50px;
		width:50px;
		cursor:pointer;
	}
	.avatar{
		display:flex;
		height:200px;
		width:200px;
	}
</style>


