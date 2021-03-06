class wordpressAPI {
  static getAllBoats() {
    return fetch('https://lakemonroeboatrental.com:8080/wp-json/acf/v3/boats?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getPolicies() {
    return fetch('https://lakemonroeboatrental.com:8080/wp-json/acf/v3/brpolicies?per_page=50').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getFAQ() {
    return fetch('https://lakemonroeboatrental.com:8080/wp-json/acf/v3/faq?per_page=50').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getHomepage() {
    return fetch('https://lakemonroeboatrental.com:8080/wp-json/acf/v3/home?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getHours() {
    return fetch('https://lakemonroeboatrental.com:8080/wp-json/acf/v3/hours?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getFuel() {
    return fetch('https://lakemonroeboatrental.com:8080/wp-json/acf/v3/fuel_rates?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getAbout() {
    return fetch('https://lakemonroeboatrental.com:8080/wp-json/acf/v3/about?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default wordpressAPI;
