import axios from "axios";
import {user, surfspot, collection} from "../stores";


export class GeosurfService {
  baseUrl = "";
  collectionList = [];
  surfspotList = [];

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    if (localStorage.surfspot) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + JSON.parse(localStorage.surfspot);
  }
  }

  async login(email, password) {
    try {
      const response = await axios.post(`${this.baseUrl}/api/users/authenticate`, {email, password});
      axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.token;
      if (response.data.success) {
        user.set({
          email: email,
          token: response.data.token,
        });
        localStorage.geosurf = JSON.stringify({email: email, token: response.data.token});
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }

  async logout() {
    user.set({
      email: "",
      token: "",
    });
    axios.defaults.headers.common["Authorization"] = "";
    localStorage.removeItem("surfspot");
  }

  async signup(firstName, lastName, email, password) {
    try {
      const userDetails = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
      };
      await axios.post(this.baseUrl + "/api/users", userDetails);
      return true;
    } catch (error) {
      return false;
    }
  }

  async getSurfspots() {
    try {
      const response = await axios.get(this.baseUrl + "/api/surfspots");
      return response.data;
    } catch (error) {
      return [];
    }
  }

/*  async getCollectionSurfspots(id) {
    try {
      const response = await axios.get(this.baseUrl + "/api/collection/"+id);
      await response.data;
      collection.set({
          id: response.data.id,
      });
      console.log(response.data);
      return response.data;
  } catch (error) {
      return [];
  }
} */


  async getCollectionSurfspots(id) {
    try {
      const response = await axios.get(this.baseUrl + "/api/collections/"+id+"/surfspots");
      this.surfspotByCollectionList = await response.data;
      collection.set({
          id: id,
      })
      console.log(response.data);
      return this.surfspotByCollectionList;
  } catch (error) {
      return [];
  }
} 

  async addSurfspot(surfspot) {
    try {
        const response = await axios.post(this.baseUrl + "/api/collections/" + surfspot.collection + "/surfspot", surfspot);
        return response.status == 200;
    } catch (error) {
        return false;
    }
  } 

  async getCollections() {
    try {
      const response = await axios.get(this.baseUrl + "/api/collections");
      return response.data
    } catch (error) {
      return [];
    }
  } 

  async addCollection(title) {
    try {
      const collectionDetails = {
        title: title,
      };
      await axios.post(this.baseUrl + "/api/collections", collectionDetails);
      return true;
    } catch (error) {
      return false;
    }
  }


  async getOneCollection(id) {
    try {
        const response = await axios.get(this.baseUrl + "/api/collections/"+id)
        this.collection = await response.data;
        collection.set({
            id: id
        })
        console.log(response.data);
        return this.collection;
    } catch (error) {
        // return [];
    }
}
}