<script>
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
<div>{$surfspot.id}</div>
<div>{$surfspot.name}</div>
<div>{$surfspot.latitude}</div>
<div>{$surfspot.longitude}</div>
<div>{$surfspot.typeOfWave}</div>
