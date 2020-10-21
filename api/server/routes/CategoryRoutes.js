import { Router } from 'express';
import CategoryController from '../controllers/CategoryController';

const router = Router();

router.get('/', CategoryController.getAllCategorys);
router.post('/', CategoryController.addCategory);
router.get('/:id', CategoryController.getACategory);
router.put('/:id', CategoryController.updatedCategory);

export default router;