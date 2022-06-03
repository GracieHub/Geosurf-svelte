<script>
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import SurfspotMap from "../components/SurfspotMap.svelte";
    import CollectionMap from "../components/CollectionMap.svelte";

  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"Map of Donation Locations"} title={"Donation Services Inc."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns">
    <div class="column has-text-centered" >
    <h1 class="title is-4">SurfSpots by Category</h1>
      <CollectionMap/>
      </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">All Surfspots</h1>
      <SurfspotMap/>
    </div>
  </div>