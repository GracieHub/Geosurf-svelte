<script>
    import waveicon from "/src/assets/waveicon.png";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import SurfspotView from "../components/SurfspotView.svelte";


  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"SurfSpot Info "} title={"Geosurf Web App"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  <br>
  <div class="columns">
    <div class="column has-text-centered">
      <img alt="waveicon" src={waveicon} width="300"/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">SurfSpot Details</h1>
      <SurfspotView/>
    </div>
  </div>


