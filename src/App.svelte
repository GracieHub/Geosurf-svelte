<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Dashboard from "./pages/Dashboard.svelte";
  import Report from "./pages/Report.svelte";
  import Router from "svelte-spa-router";
  import {GeosurfService} from "./services/geosurf-service";
  import {setContext} from "svelte";

  // const geosurfService = getContext("GeosurfService");

  setContext("GeosurfService", new GeosurfService("http://localhost:4000"));


  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/main": Main,
    "/dashboard": Dashboard,
    "/report": Report,
    "/logout": Main
  }
</script>

<div class="container">
  <Router {routes}/>
</div>