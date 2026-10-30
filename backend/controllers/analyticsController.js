import { countDocuments, find } from '../models/Order';
import { countDocuments as _countDocuments } from '../models/Product';
import { countDocuments as __countDocuments } from '../models/User';

const getAdminStats = async (req, res) => {
  try {
    const totalOrders = await countDocuments({});
    const totalProducts = await _countDocuments({});
    const totalUsers = await __countDocuments({ role: 'user' });

    const orders = await find({});
    const totalRevenue = orders.reduce((acc, item) => acc + item.totalAmount, 0);

    res.json({ totalOrders, totalProducts, totalUsers, totalRevenue });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default { getAdminStats };
