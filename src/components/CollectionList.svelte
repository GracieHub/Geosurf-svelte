<script>
    import {getContext, onMount} from 'svelte'
    
    const geosurfService = getContext("GeosurfService");

    let collectionList =[];

    onMount(async () => {
      collectionList = await geosurfService.getCollections();
    });


  </script>
  
    <section>
    <thead>
      <th>Collection Name</th>
    </thead>
      {#each collectionList as collection}
      <div class="box box-link-hover-shadow">
        <h2 class="title">
          {collection.title}
        </h2>
        <a href="/#/collection/{collection._id}" class="button">
          <span class="icon is-small">
            <i class="fas fa-folder-open"></i>
          </span>
        </a>
      </div>
      {/each}
    </section>