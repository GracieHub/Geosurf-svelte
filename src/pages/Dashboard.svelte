<script>
    import homer2 from "/src/assets/homer2.png";
    import DashboardForm from "..//components/DashboardForm.svelte";
    import TitleBar from "../components/TitleBar.svelte";
    import MainNavigator from "../components/MainNavigator.svelte";
  </script>
  
  <div class="columns is-vcentered">
    <div class="column is-two-thirds">
      <TitleBar subTitle={"User Dashboard"} title={"Geosurf Web App"}/>
    </div>
    <div class="column">
      <MainNavigator/>
    </div>
  </div>
  
  <div class="columns is-vcentered">
    <div class="column has-text-centered">
      <img alt="Homer" src={homer2} width="300"/>
    </div>
    <div class="column box has-text-centered">
      <h1 class="title is-4">DashBoard needs to go here!</h1>
      <DashboardForm/>
    </div>
  </div>