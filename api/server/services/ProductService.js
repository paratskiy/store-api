import database from '../src/models';

class ProductService {
  static async getAllProducts() {
    try {
      return await database.Product.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addProduct(newProduct) {
    try {
      return await database.Product.create(newProduct);
    } catch (error) {
      throw error;
    }
  }

  static async updateProduct(id, updateProduct) {
    try {
      const productToUpdate = await database.Product.findByPk(id);
      if (productToUpdate) return productToUpdate.update(updateProduct);

      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAProduct(id) {
    try {
      return await database.Product.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(id) {
    try {
      const productToDelete = await database.Product.findByPk(id);
      if (productToDelete) return productToDelete.destroy();

      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAProductWithCategory(id) {
    try {
      return await database.Product.findByPk(id, { include: 'category' });
    } catch (error) {
      throw error;
    }
  }

  static async getProductProviders(id) {
    try {
      const product = await database.Product.findByPk(id, { include: ['providers'] });
      if(product) return product.get().providers;

      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;