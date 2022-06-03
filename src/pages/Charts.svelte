<script>
  import homer3 from "/src/assets/homer3.png";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
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
  } 

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
    })
  }

onMount(async () => {
      let surfspotList = await geosurfService.getSurfspots();
      populateByTypeOfWave(surfspotList);
})

</script>  
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Geosurf Analytics"} title={"Gesourf Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column box has-text-centered">
      <h1 class="title is-4">Geosurf Analytics</h1>
      <Chart data={surfspotsByTypeOfWave} type="bar"/>
    </div>
    <div class="column has-text-centered">
      <img alt="Homer" src={homer3} width="300"/>
    </div>
  </div>