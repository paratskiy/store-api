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
      const productToUpdate = await database.Product.findOne({
        where: { id: Number(id) }
      });

      if (productToUpdate) {
        await database.Product.update(updateProduct, { where: { id: Number(id) } });

        return updateProduct;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAProduct(id) {
    try {
      const theProduct = await database.Product.findOne({
        where: { id: Number(id) }
      });

      return theProduct;
    } catch (error) {
      throw error;
    }
  }

  static async deleteProduct(id) {
    try {
      const productToDelete = await database.Product.findOne({ where: { id: Number(id) } });

      if (productToDelete) {
        const deletedProduct = await database.Product.destroy({
          where: { id: Number(id) }
        });
        return deletedProduct;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAProductWithCategory(id) {
    try {
      const theProduct = database.Product.findOne({
        where: { id: Number(id) }, include: 'category'
      })
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
}

export default ProductService;