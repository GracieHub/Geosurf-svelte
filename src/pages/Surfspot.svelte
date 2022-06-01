<script>
    import homer2 from "/src/assets/homer2.png";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";

    import {getContext, onMount} from 'svelte'
    import {surfspot} from "../stores";

    const geosurfService = getContext("GeosurfService");
    
    let surfspotBySurfspotId = [];
    let url = ``;

    onMount(async (request) => {
        url = window.location.href
        console.log(url)
        let parsedURL = url.substring(34)
        surfspotBySurfspotId  = await geosurfService.getSurfspotBySurfspotId(parsedURL);
        console.log(surfspotBySurfspotId)
    });
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"SurfSpot Info "} title={"Geosurf Web App"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>

  <div>{$surfspot.id}</div>
  <div>{$surfspot.name}</div>
  <div>{$surfspot.latitude}</div>
  <div>{$surfspot.longitude}</div>
  <div>{$surfspot.typeOfWave}</div>