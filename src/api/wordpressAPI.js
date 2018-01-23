class wordpressAPI {
  static getAllBoats() {
    return fetch('https://balcarth.com/wordpress/wp-json/acf/v3/boats?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getPolicies() {
    return fetch('https://balcarth.com/wordpress/wp-json/acf/v3/brpolicies?per_page=50').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }

  static getRates() {
    return fetch('https://balcarth.com/wordpress/wp-json/acf/v3/boats?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getHomepage() {
    return fetch('https://balcarth.com/wordpress/wp-json/acf/v3/home?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
  static getHours() {
    return fetch('https://balcarth.com/wordpress/wp-json/acf/v3/hours?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default wordpressAPI;
