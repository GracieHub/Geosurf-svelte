<script>
    import homer2 from "/src/assets/homer2.png";
    import SurfspotForm from "../components/SurfspotForm.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import SurfspotList from "../components/SurfspotList.svelte";

  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"User "} title={"Geosurf Web App"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>

  <div class="columns">
    <div class="column has-text-centered">
      <img alt="Homer" src={homer2} width="300"/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Surfspots to date</h1>
      <SurfspotList/>
    </div>
  </div>
<br>
<br>
  <div class="columns">
    <div class="column has-text-centered">
      <img alt="Homer" src={homer2} width="300"/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">Add Surf Spot!</h1>
      <SurfspotForm/>
    </div>
  </div>