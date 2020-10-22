import { Router } from 'express';
import ProductController from '../controllers/ProductController';

const router = Router();

router.get('/', ProductController.getAllProducts);
router.post('/', ProductController.addProduct);
router.get('/:id', ProductController.getAProduct);
router.put('/:id', ProductController.updatedProduct);
router.delete('/:id', ProductController.deleteProduct);
router.get('/:id/with-category', ProductController.getAProductWithCategory);
router.get('/:id/providers', ProductController.getProductProviders);

export default router;