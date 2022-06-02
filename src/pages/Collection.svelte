<script>
  import SurfspotList from "../components/SurfspotList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import SurfspotForm from "../components/SurfspotForm.svelte";
  import SurfspotMap from "../components/SurfspotMap.svelte";

  let surfspotMap = null;

  function surfspotAdded(event) {
    surfspotMap.addSurfspotMarker(event.detail.surfspot);
  }

</script>

<section>
<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"User Categories so far..."} title={"The Geosurf Application"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>
<div><SurfspotList/>
</div>
<div class="columns">
  <div class="column has-text-centered">
    <SurfspotMap bind:this={surfspotMap}/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Add a New Surfspot</h1>
    <SurfspotForm on:message={surfspotAdded}/>
  </div>
   
</section>
