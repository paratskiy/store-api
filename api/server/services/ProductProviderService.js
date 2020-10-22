import database from '../src/models';

class ProductProvider {
  static async addProductProviderRelation(params) {
    try {
      const provider = await database.Provider.findByPk(Number(params.providerId));
      const product = await database.Product.findByPk(Number(params.productId));
      const existingRelation = await database.ProductProvider.findOne({ where: params  })

      if (existingRelation) return existingRelation
      if (provider && product) return await database.ProductProvider.create(params);

      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ProductProvider;