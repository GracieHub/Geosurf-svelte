<script>
    import {getContext, onMount} from 'svelte'
    
    const geosurfService = getContext("GeosurfService");

    let collectionList =[];

    onMount(async () => {
      collectionList = await geosurfService.getCollections();
    });


  </script>
  
    <section>
    <h4 class="uk-heading-bullet"><a href="/#/report">Show All SurfSpots</a></h4>
    <br>
    <table class="uk-table large">
      <thead>
          <tr>
              <th>Select Based on Category</th>
          </tr>
      </thead>
      <tbody>
        {#each collectionList as collection}
        <tr>
          <td>
            {collection.title}
          </td>
          <td>
            <a href="/#/collection/{collection._id}" class="icon is-small fas fa-th-list">
            </a>
          </td>
        </tr>
        {/each}
    </tbody>
</table>
</section>