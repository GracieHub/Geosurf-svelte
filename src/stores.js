import {writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
  userid: "",
});


export const surfspot = writable({
  id: "",
  name: "",
  latitude: "",
  longitude: "",
  typeOfWave: "",
});

export const colleciton = writable({
    id: "",
    title: "",
    parsedURL:","
});


