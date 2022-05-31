import {writable} from "svelte/store";

export const user = writable({
  email: "",
  token: "",
});

export const surfspot = writable({
    id: ""
});

export const collection = writable({
    id: ""
});

