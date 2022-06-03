<script>
  import Incredible from "/src/assets/Incredible3.jpg";
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


  <div class="column has-text-centered">
  <div class="column">
    <h1 class="title">Welcome to Geosurf</h1>
    <p>Time to Share your favourite locations to surf around the World!</p>
  </div>
</div>
<img width="1400" src="{Incredible}" alt="waveicon">
