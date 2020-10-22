import { Router } from 'express';
import MainController from '../controllers/MainController';

const router = Router();

router.post('/add-product-provider-relation', MainController.addProductProviderRelation);

export default router;