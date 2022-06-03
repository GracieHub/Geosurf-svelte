<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const geosurfService = getContext("GeosurfService");
    
    let surfspotsPerCollection = {
    labels:[],
    datasets:[
      {
        values:[]
      }
    ]
  }
  
  function populateByCollection(surfspotList, collections){
    surfspotsPerCollection.labels =[];
    collections.forEach(collection => {
      surfspotsPerCollection.labels.push(`${collection.title}`)
      surfspotsPerCollection.datasets[0].values.push(0);
    })
    collections.forEach((collection, i) => {
      surfspotList.forEach(surfspot => {
        if (surfspot.collectionid == collection._id) {
          surfspotsPerCollection.datasets[0].values[i] ++;
        }
      });
    });
  };

  export async function refreshChart(){
    let surfspotList = await geosurfService.getSurfspots();
    let collections = await geosurfService.getCollections();
    populateByCollection(surfspotList, collections);
  }
  onMount(async () => {
      let collections = await geosurfService.getCollections();
      let surfspotList = await geosurfService.getSurfspots();
      populateByCollection(surfspotList, collections)
})

</script>  

<h1 class="title is-4">Number of Surf Spots per Collection</h1>
<Chart data={surfspotsPerCollection} type="pie"/>