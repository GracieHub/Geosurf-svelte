<script>
    import 'leaflet/dist/leaflet.css';
    import {LeafletMap} from '../services/leaflet-map';
    import {getContext, onMount} from "svelte";
  
    const geosurfService = getContext("GeosurfService");

    const mapConfig = {
      location: {lat: 52.160858, lng: -7.152420},
      zoom: 8,
      minZoom: 1,
    };
    let map =null;

onMount(async () => {
    map = new LeafletMap("surfspot-map", mapConfig);
    map.showZoomControl();
    map.addLayerGroup('Surfspots');
    map.showLayerControl();

    const surfspots = await geosurfService.getSurfspots();
        surfspots.forEach(surfspot => {
            addSurfspotMarker(surfspot);
        });
    });

export function addSurfspotMarker(surfspot) {
    const surfspotStr = `${surfspot.name}`;
    map.addMarker({lat: surfspot.latitude, lng: surfspot.longitude}, surfspotStr, "Surfspots");
    map.moveTo(11, {lat: surfspot.latitude, lng: surfspot.longitude});
       }


  </script>
  
  <div class="box" id="surfspot-map" style="height:800px">
</div>