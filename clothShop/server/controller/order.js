const Order = require("../models/Order");

///////////////////////////////////  getOrderById  ////////////////////////////////////
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findOne({ userId: req.params.userId });
    res.status(200).json(order);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  get all orders  ////////////////////////////////////
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("user", "username img").exec();
    // console.log("orders:", orders);
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
};
///////////////////////////////////  get monthly income  ////////////////////////////////////
exports.getMonthIncome = async (req, res) => {
  const productId = req.query.productId;
  // console.log("find product incom:", productId);
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const lsm = lastMonth.getMonth() + 1;
  // console.log("lastMonth ", lsm);
  const previousMonth = new Date(lastMonth.setMonth(lastMonth.getMonth() - 1));
  const prem = previousMonth.getMonth() + 1;
  // console.log("previousMonth", prem);
  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },

      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    // console.log("income", income);
    const monthInfo = [
      income.find((item) => {
        if (item._id === prem) {
          return item;
        }
      }),
      income.find((item) => {
        if (item._id === lsm) {
          return item.total;
        }
      }),
    ];
    // console.log("monthInfo", monthInfo);

    // console.log("income", income);
    res.status(200).json(monthInfo);
  } catch (err) {
    res.status(500).json(err);
  }
};

///////////////////////////////////  create  a order  ////////////////////////////////////

exports.createOrder = async (req, res) => {
  const newOrder = new Order(req.body);
  console.log("newOrder", newOrder);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  updateOrder  ////////////////////////////////////

exports.updateOrder = async (req, res) => {
  // change other info
  try {
    console.log("try to update cart :", req.params.orderId);
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      {
        $set: req.body,
      },
      { new: true } //{ new : true } will return the modified document rather than the original
    );

    console.log("updatedOrder is:", updatedOrder);
    res.status(200).json(updatedOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
};

///////////////////////////////////  deleteOrder ////////////////////////////////////

exports.deleteOrder = async (req, res) => {
  console.log("del order", req.params.orderId);
  try {
    await Order.findByIdAndDelete(req.params.orderId);
    res.status(200).json("order has been deleted");
  } catch (err) {
    return res.status(500).json(err);
  }
};
///////////////////////////////////  create  a order  ////////////////////////////////////

exports.getCheckoutSuccess = async (req, res) => {
  const newOrder = new Order(req.body);
  console.log("newOrder", newOrder);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (err) {
    return res.status(500).json(err);
  }
};
