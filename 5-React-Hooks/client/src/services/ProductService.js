import axios from 'axios';

class ProductService {

  async getProducts() {
    return axios.get("http://localhost:3000/products")
      .then(response => response.data);
  }
}

export default new ProductService();