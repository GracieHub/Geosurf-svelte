<script>
  import homer from "/src/assets/homer2.png";
  import SurfspotList from "../components/SurfspotList.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import SurfspotForm from "../components/SurfspotForm.svelte";
</script>

<section>
<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"Donations so far..."} title={"The Placemark Application"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>
<div class="columns">
  <div class="column has-text-centered">
    <img alt="Homer" src={homer} width="300"/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Surfspots to date</h1>
    <SurfspotList/>
  </div>
</div>
  <div>
    <SurfspotForm/>
  </div>
</section>
