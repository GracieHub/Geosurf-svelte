<script>
    import homer3 from "/src/assets/homer3.png";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
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


    function populateByTypeOfWave(collection) {
        collection.forEach(surfspot => {
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
    populateByTypeOfWave(collection);
    });
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Donation Analytics"} title={"Donation Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column box has-text-centered">
      <h1 class="title is-4">Donations to date</h1>
      <Chart data={surfspotsByTypeOfWave} type="pie"//>
    </div>
    <div class="column has-text-centered">
      <img alt="Homer" src={homer3} width="300"/>
    </div>
  </div>