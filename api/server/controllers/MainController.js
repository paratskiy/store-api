import ProductProviderService from '../services/ProductProviderService';
import Util from '../utils/Utils';

const util = new Util();

class MainController {
  static async addProductProviderRelation(req, res) {
    const params = req.body;
    if (!Number(params.providerId) || !Number(params.productId)) {
      util.setError(400, 'Please input a valid numeric value');
      return util.send(res);
    }
    try {
      const productProviderRelation = await ProductProviderService.addProductProviderRelation(params);
      if (!productProviderRelation) {
        util.setError(404, `Cannot find provider or product with passed params`);
      } else {
        util.setSuccess(200, 'Provider updated', productProviderRelation);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }
}

export default MainController;