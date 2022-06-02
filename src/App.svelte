<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import Surfspot from "./pages/Surfspot.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Router from "svelte-spa-router";
  import Collection from "./pages/Collection.svelte"
  import Map from "./pages/Map.svelte"
  import {setContext} from "svelte";
  import { GeosurfService } from "./services/geosurf-service"; 
  import Charts from "./pages/Charts.svelte";


  setContext("GeosurfService", new GeosurfService("http://localhost:4000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/report": Report,
    "/logout": Main,
    "/dashboard": Dashboard,
    "/surfspot/*": Surfspot,
    "/collection": Collection,
    "/collection/*": Collection,
    "/map": Map,
    "/charts": Charts,

  }
</script>

<div class="container">
  <Router {routes}/>
</div>
