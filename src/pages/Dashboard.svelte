<script>
  import homer2 from "/src/assets/homer2.png";
  import CollectionForm from "../components/CollectionForm.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import MainNavigator from "../components/MainNavigator.svelte";
  import CollectionList from "../components/CollectionList.svelte";

</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar subTitle={"User Dashboard"} title={"Geosurf Web App"}/>
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
    <h1 class="title is-4">Add Collection</h1>
    <CollectionForm/>
  </div>
</div>
<br>
<br>
<div class="columns">
  <div class="column box has-text-centered">
    <h1 class="title is-4">Collections to date</h1>
    <CollectionList/>
  </div>
</div>
<br>