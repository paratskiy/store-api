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

      if (productToUpdate) {
        await productToUpdate.update(updateProduct);

        return updateProduct;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAProduct(id) {
    try {
      const theProduct = await database.Product.findByPk(id);

      return theProduct;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(id) {
    try {
      const productToDelete = await database.Product.findByPk(id);

      if (productToDelete) {
        await productToDelete.destroy()

        return deletedProduct;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAProductWithCategory(id) {
    try {
      const theProduct = database.Product.findByPk(id, { include: 'category' })
        .then((findProduct) => {
          // Get the Product with Category datas included
          return findProduct
          // Get the category record only
          // return findProduct.category 
        })

      return theProduct;
    } catch (error) {
      throw error;
    }
  }

  static async getProductProviders(id) {
    try {
      return database.Product.findByPk(id, { include: ['providers'] })
        .then((findProduct) => {
          return findProduct.get().providers
        })
    } catch (error) {
      throw error;
    }
  }
}

export default ProductService;