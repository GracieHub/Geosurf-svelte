<script>
  import waveicon from "/src/assets/waveicon.png";
  export let title = "";
  export let subTitle = "";
  import {user} from "../stores.js"
</script>

<div class="box has-text-centered columns m-2">
  <div class="column">
    <img src="{waveicon}" width="60" alt="img"/>
  </div>
  <div class="column">
    <div class="title is-5"> {title} </div>
    <div class="subtitle is-5"> {subTitle} </div>
  </div>
  <div class="column">
    <i class="fas fa-donate fa-3x" style="color:rgb(95, 96, 173)" title="Source repo" pos="bottom" uk-tooltip></i>
    {#if $user.email}
      <div class="is-size-7">{$user.email} </div>
    {:else}
      <div class="is-size-7">Geosurf-Svelte 0.2</div>
    {/if}
  </div>
</div>