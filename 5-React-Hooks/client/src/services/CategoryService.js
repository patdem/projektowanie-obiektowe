import axios from 'axios';

class CategoryService {

  async getCategories() {
    return axios.get("http://localhost:3000/categories")
      .then(response => response.data);
  }
}

export default new CategoryService();