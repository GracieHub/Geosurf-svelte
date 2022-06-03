<script>
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import SurfspotsByTypeOfWave from "../components/SurfspotsByTypeOfWave.svelte";
  import SurfspotsPerCollection from "../components/SurfspotsPerCollection.svelte";
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
      <SurfspotsByTypeOfWave/>
    </div>
    <div class="column has-text-centered">
      <SurfspotsPerCollection/>
    </div>
    </div>