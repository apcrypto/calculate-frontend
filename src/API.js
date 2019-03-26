class API {
  static signin(user) {
    return fetch("http://localhost:3000/api/v1/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response => response.json());
  }

  static validate() {
    return this.get("http://localhost:3000/api/v1/validate");
  }

  static getInventory() {
    return this.get("http://localhost:3000/api/v1/inventory");
  }

  static get(url) {
    return fetch(url, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }).then(response => response.json());
  }
}

window.API = API;

export default API;
