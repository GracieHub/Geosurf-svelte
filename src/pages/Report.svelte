<script>
    import WaveDrone from "/src/assets/WaveDrone.jpg";
    import SurfspotListAll from "../components/SurfspotListAll.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
    import SurfspotsByTypeOfWave from "../components/SurfspotsByTypeOfWave.svelte";
    import Analytics from "../components/Analytics.svelte";
    import CollectionList from "../components/CollectionList.svelte";


</script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"All Surf spots so far..."} title={"Surf Collections."}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  <div class="column">
    <Analytics/>
</div>
<br>
  <div class="columns">
    <div class="column has-text-centered">
      <img alt="WaveDroneShot" src={WaveDrone} width="600"/>
      <br>
      <br>
      <SurfspotsByTypeOfWave/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">AllSurfspots on website to date</h1>
      <SurfspotListAll/>
    </div>
  </div>