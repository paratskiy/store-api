import { Router } from 'express';
import ProviderController from '../controllers/ProviderController';

const router = Router();

router.get('/', ProviderController.getAllProviders);
router.post('/', ProviderController.addProvider);
router.get('/:id', ProviderController.getAProvider);
router.put('/:id', ProviderController.updatedProvider);
router.delete('/:id', ProviderController.deleteProvider);

export default router;