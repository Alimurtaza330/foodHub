import mongoose, { Schema } from "mongoose";

const OrderdetailSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  order_Data: {
    type: Array,
    required: true,
  },
});

export default mongoose.model("OrderDetail", OrderdetailSchema);
