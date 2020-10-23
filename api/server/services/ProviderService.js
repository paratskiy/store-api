import database from '../src/models';

class ProviderService {
  static async getAllProviders() {
    try {
      return await database.Provider.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addProvider(newProvider) {
    try {
      return await database.Provider.create(newProvider);
    } catch (error) {
      throw error;
    }
  }

  static async updateProvider(id, updateProvider) {
    try {
      const providerToUpdate = await database.Provider.findByPk(id);
      if (providerToUpdate) return await providerToUpdate.update(updateProvider);

      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getAProvider(id) {
    try {
      return await database.Provider.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  static async deleteProvider(id) {
    try {
      const providerToDelete = await database.Provider.findByPk(id);
      if (providerToDelete) return await providerToDelete.destroy();

      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getProviderProducts(id) {
    try {
      const provider = await database.Provider.findByPk(id, { include: ['products'] });
      if (provider) return provider.get().products;

      return null;
    } catch (error) {
      throw error;
    }
  }
}

export default ProviderService;