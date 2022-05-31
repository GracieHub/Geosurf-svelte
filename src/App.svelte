<script>
  import Main from "./pages/Main.svelte"
  import Login from "./pages/Login.svelte"
  import Signup from "./pages/Signup.svelte"
  import Report from "./pages/Report.svelte";
  import Surfspot from "./pages/Surfspot.svelte";
  import Dashboard from "./pages/Dashboard.svelte";
  import Router from "svelte-spa-router";
  import Collection from "./pages/Surfspot.svelte"
  import {GeosurfService} from "./services/geosurf-service";
  import {setContext} from "svelte";

  setContext("GeosurfService", new GeosurfService("http://localhost:4000"));

  let routes = {
    "/": Main,
    "/login": Login,
    "/signup": Signup,
    "/report": Report,
    "/logout": Main,
    "/dashboard": Dashboard,
    "/surfspot": Surfspot,
    "/collection": Collection,
    "/collection/*": Collection,
  }
</script>

<div class="container">
  <Router {routes}/>
</div>
