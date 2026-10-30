import { Router } from 'express';
import { getAdminStats } from '../controllers/analyticsController';
import { protect } from '../middleware/authMiddleware';
import { admin } from '../middleware/adminMiddleware';

const router = Router();

router.get('/', protect, admin, getAdminStats);

export default router;
