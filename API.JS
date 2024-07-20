class API {
  constructor() {
    this.apikey = "aKQdF1d8Uc4ksYMwLLnOkvLt1x9YsPnKPEsqhpfea7g";
  }

  async getPhotosFromApi(query) {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=10`;

    try {
      const response = await fetch(url, {
        headers: {
          Authorization: `Client-ID ${this.apikey}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        return data.results;
      } else {
        console.error("Error fetching photos:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  }
}
