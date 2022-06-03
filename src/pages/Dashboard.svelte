<script>
  import Garrarus from "/src/assets/Garrarus.jpg";
  import CollectionForm from "../components/CollectionForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import CollectionList from "../components/CollectionList.svelte";
  import CollectionMap from "../components/CollectionMap.svelte";
  import SurfspotsPerCollection from "../components/SurfspotsPerCollection.svelte";

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"User Dashboard"} title={"Geosurf Web App"}/>
  </div>
  <div class="column">
    <MainNavigator/>
  </div>
</div>

<div class="columns is-centered">
<CollectionList/>
</div>
<br>
<div class="columns">
  <div class="column has-text-centered">
    <CollectionMap/>
  </div>
  <div class="column box has-text-centered">
    <h1 class="title is-4">Add a New Collection</h1>
    <CollectionForm/>
    <img alt="GarrarusBeach" src={Garrarus} width="600"/>
  </div>
</div>
<div class="column has-text-centered">
  <SurfspotsPerCollection/>
</div>