<script>
  import homer from "/src/assets/homer.png";
  import WelcomeNavigator from "../components/WelcomeNavigator.svelte";
  import TitleBar from "../components/TitleBar.svelte";
  import {getContext} from "svelte";

  const geosurfService = getContext("GeosurfService");
  geosurfService.logout();
</script>

<div class="columns is-vcentered">
  <div class="column is-two-thirds">
    <TitleBar title={"Geosurf Services Inc."} subTitle={"Sign up or Log in"}/>
  </div>
  <div class="column">
    <WelcomeNavigator/>
  </div>
</div>

<div class="columns is-vcentered content">
  <div class="column has-text-centered">
    <img width="300" src="{homer}" alt="homer">
  </div>
  <div class="column">
    <h1 class="title">Main Page</h1>
    <p>Dd something!</p>
  </div>
</div>