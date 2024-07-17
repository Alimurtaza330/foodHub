import express from "express";
import OrderDetail from "../model/OrderDetail.js";
const router = express.Router();

router.post("/orderDetail", async (req, res) => {
  try {
    const orders = req.body.order;
    orders.splice(0, 0, { Orderdate: req.body.date });

    const emailId = await OrderDetail.findOne({ email: req.body.email });
    if (emailId === null) {
      await OrderDetail.create({
        email: req.body.email,
        order_Data: [orders],
      });
      res.json({ success: true });
    } else {
      await OrderDetail.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_Data: orders } }
      );
      res.json({ success: true });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
});


router.post('/myOrderHistory', async (req, res) => {
  try {
      const { email } = req.body;
      const myOrderHistory = await OrderDetail.findOne({ email });

      if (!myOrderHistory) {
          return res.status(404).json({ success: false, message: 'Order history not found' });
      }

      res.status(200).json({ success: true, orderData: myOrderHistory.order_Data });
  } catch (error) {
      console.error('Error fetching order history:', error);
      res.status(500).json({ success: false, message: 'Error fetching order history', error: error.message });
  }
});

export default router;
