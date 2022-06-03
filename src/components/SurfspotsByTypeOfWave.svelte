<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";

    const geosurfService = getContext("GeosurfService");

    let surfspotCount = 0;
    let surfspotList =[];


    let surfspotsByTypeOfWave = {
    labels: ["Beginner", "Intermediate", "Advanced", "Pro"],
    datasets: [
     {
       values: [0, 0, 0, 0]
     }
    ]
  };
  
  function populateByTypeOfWave(surfspots) {
    surfspotCount = surfspotList.length;
    surfspots.forEach((surfspot) => {
    if (surfspot.typeOfWave == "Beginner") {
        surfspotsByTypeOfWave.datasets[0].values[0] += 1
      } else if (surfspot.typeOfWave == "Intermediate") {
        surfspotsByTypeOfWave.datasets[0].values[1] += 1
      } else if (surfspot.typeOfWave == "Advanced") {
        surfspotsByTypeOfWave.datasets[0].values[2] += 1
      } else if (surfspot.typeOfWave == "Pro") {
        surfspotsByTypeOfWave.datasets[0].values[3] += 1
      }
    });
  };

  export async function refreshChart(){
    let surfspotList = await geosurfService.getSurfspots();
    populateByTypeOfWave(surfspotList);
  }

  onMount(async () => {
      let surfspotList = await geosurfService.getSurfspots();
      populateByTypeOfWave(surfspotList);
    })

</script>  

<h1 class="title is-4">Surfspots By Type Of Wave</h1>
<Chart data={surfspotsByTypeOfWave} type="bar"/>