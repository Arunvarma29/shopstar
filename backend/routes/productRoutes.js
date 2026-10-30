import { Router } from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
import { protect } from '../middleware/authMiddleware';
import { admin } from '../middleware/adminMiddleware';
import multer from 'multer';
const upload = multer({ dest: 'uploads/' });

const router = Router();

router.route('/').get(getProducts).post(protect, admin, upload.single('image'), createProduct);
router.route('/:id').get(getProductById).put(protect, admin, upload.single('image'), updateProduct).delete(protect, admin, deleteProduct);

export default router;
