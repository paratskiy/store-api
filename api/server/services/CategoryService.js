import database from '../src/models';

class CategoryService {
  static async getAllCategorys() {
    try {
      return await database.Category.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addCategory(newCategory) {
    try {
      return await database.Category.create(newCategory);
    } catch (error) {
      throw error;
    }
  }

  static async updateCategory(id, updateCategory) {
    try {
      const categoryToUpdate = await database.Category.findByPk(id);
      if (categoryToUpdate) return categoryToUpdate.update(updateCategory);

      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getACategory(id) {
    try {
      return await database.Category.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  static async getCategoryWithProducts(id) {
    try {
      return database.Category.findByPk(id, { include: ['products'] });
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryService;