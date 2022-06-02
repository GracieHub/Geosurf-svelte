<script>
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    const geosurfService = getContext("GeosurfService");
  
    let surfspotsByTypeOfWave = {
      labels: [["Beginner", "Intermediate", "Advanced", "Pro"]],
      datasets: [
        {
          values: [0,0,0,0]
        }
      ]
    };


    function populateByTypeOfWave(surfspotList) {
        surfspotList.forEach(surfspot => {
        if (surfspot.typeOfWave == "Beginner") {
          surfspotsByTypeOfWave.datasets[0].values[0] += surfspot.typeOfWave
        } else if (surfspot.typeOfWave == "Intermediate") {
          surfspotsByTypeOfWave.datasets[0].values[1] += surfspot.typeOfWave
        } else if (surfspot.typeOfWave == "Advanced") {
          surfspotsByTypeOfWave.datasets[0].values[2] += surfspot.typeOfWave
        } else if (surfspot.ttypeOfWave == "Pro") {
          surfspotsByTypeOfWave.datasets[0].values[3] += surfspot.typeOfWave
        }
      });
    }

    onMount(async () => {
    let surfspotList = await geosurfService.getSurfspots();
    populateByTypeOfWave(surfspotList);
    });
  </script>