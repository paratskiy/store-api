import CategoryService from '../services/CategoryService';
import Util from '../utils/Utils';

const util = new Util();

class CategoryController {
  static async getAllCategorys(req, res) {
    try {
      const allCategorys = await CategoryService.getAllCategorys();
      if (allCategorys.length > 0) {
        util.setSuccess(200, 'Categorys retrieved', allCategorys);
      } else {
        util.setSuccess(200, 'No category found');
      }
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }

  static async addCategory(req, res) {
    if (!req.body.name) {
      util.setError(400, 'Please provide complete details');
      return util.send(res);
    }
    const newCategory = req.body;
    try {
      const createdCategory = await CategoryService.addCategory(newCategory);
      util.setSuccess(201, 'Category Added!', createdCategory);
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }

  static async updatedCategory(req, res) {
    const alteredCategory = req.body;
    const { id } = req.params;
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const updateCategory = await CategoryService.updateCategory(id, alteredCategory);
      if (!updateCategory) {
        util.setError(404, `Cannot find category with the id: ${id}`);
      } else {
        util.setSuccess(200, 'Category updated', updateCategory);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }

  static async getACategory(req, res) {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }

    try {
      const theCategory = await CategoryService.getACategory(id);

      if (!theCategory) {
        util.setError(404, `Cannot find category with the id ${id}`);
      } else {
        util.setSuccess(200, 'Found Category', theCategory);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
}

export default CategoryController;