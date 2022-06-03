<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
    import { get } from 'svelte/store';
    import {user} from "../stores";

  
    const geosurfService = getContext("GeosurfService");
    const mapConfig = {
      location: {lat: 52.160858, lng: -7.152420},
      zoom: 8,
      minZoom: 1,
    };
    let map =null;

    async function MapsByCollection(){
        const storedUser =get(user);
        const allCollections = await geosurfService.getCollections();
        const collectionList = allCollections.filter(collection => collection.id === storedUser.userid);
        const allSurfspots = await geosurfService.getSurfspots();
        const map = new LeafletMap("collection-map", mapConfig);
        collectionList.forEach(collection => {
            const collectionSurfspots = allSurfspots.filter(surfspot => surfspot.collectionid === collection._id);
            map.addLayerGroup(collection.title); 
            collectionSurfspots.forEach(surfspot => {
            map.addMarker({lat: surfspot.latitude, lng: surfspot.longitude}, surfspot.name, collection.title);
            });
        });
        map.showZoomControl();
        map.showLayerControl();
    }

    onMount(async () => {
    MapsByCollection()                  //map with surfpsots by category
    });


</script>
<div class="box" id="collection-map" style="height:600px"></div>
