<script>
    import {getContext, onMount} from 'svelte'


    const geosurfService = getContext("GeosurfService");
    let surfspotList = [];
    let collectionList = [];
    let userList = [];
    let surfspotCount = 0;
    let userCount = 0;
    let collectionCount = 0;
    
    // looking for the bumber of surfspots, collections and users 
    onMount(async () => {
        surfspotList = await geosurfService.getSurfspots();
        surfspotCount = surfspotList.length;
        collectionList = await geosurfService.getCollections();
        collectionCount = collectionList.length;
        userList = await geosurfService.getUsers();
        userCount = userList.length;
        //console.log("in analytics header onMount");
    });

</script>
