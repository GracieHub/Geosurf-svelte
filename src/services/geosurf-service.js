import axios from "axios";
import {user, surfspot} from "../stores";
import {push} from "svelte-spa-router";


export class GeosurfService {
  baseUrl = "";
  collectionList = [];
  surfspotList = [];

  constructor(baseUrl) {
    this.baseUrl = baseUrl;
    const surfspotCredentials = localStorage.surfspot;
    if (surfspotCredentials) {
      const savedUser = JSON.parse(surfspotCredentials);
      user.set({
        email: savedUser.email,
        token: savedUser.token,
      });
      axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
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
        localStorage.surfspot = JSON.stringify({email: email, token: response.data.token});
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

  async getSurfspotsByCategoryId(parsedURL) {
    try {
      const response = await axios.get(this.baseUrl + "/api/collections/"+parsedURL+"/surfspots");
      return response.data;
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

  async getCollectionsById() {
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


  async getSurfspotBySurfspotId(parsedURL) {
    try {
      const response = await axios.get(this.baseUrl + "/api/surfspots/" + parsedURL);
      surfspot.set({
        id: response.data._id,
        name: response.data.name,
        latitude: response.data.latitude,
        longitude: response.data.longitude,
        typeOfWave: response.data.typeOfWave,
      });
      return response.data
    } catch (error) {
      return [];
    }
  }

  async getUsers() {
    try {
        const response = await axios.get(this.baseUrl + "/api/users")
        this.userList = await response.data;
        return this.userList;
    } catch (error) {
        return [];
    }
}

}