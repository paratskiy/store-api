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

      if (categoryToUpdate) {

        await categoryToUpdate.update(updateCategory)

        return updateCategory;
      }
      return null;
    } catch (error) {
      throw error;
    }
  }

  static async getACategory(id) {
    try {
      const theCategory = await database.Category.findByPk(id);

      return theCategory;
    } catch (error) {
      throw error;
    }
  }

  static async getCategoryWithProducts(id) {
    try {
      const theCategory = database.Category.findByPk(id, { include: ['products'] })
        .then((category) => {
          // Get the Category with Products (employes) datas included
          return category
          // Get the Products (employes) records only
          // return company.get().employes
        })

      return theCategory;
    } catch (error) {
      throw error;
    }
  }
}

export default CategoryService;