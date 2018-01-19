class wordpressAPI {
  static getAllBoats() {
    return fetch('https://balcarth.com/wordpress/wp-json/wp/v2/boats?_embed').then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

export default wordpressAPI;
