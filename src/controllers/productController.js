//giả lập dữ liệu từ DB

const product = [
  {
    id: 1,
    name: "Huy",
    age: 18,
  },
  {
    id: 2,
    name: "Linh",
    age: 15,
  },
];

const getAllProduct = async (req, res) => {
  try {
    res.status(200).json({
      message: "loda data success",
      data: product,
    });
  } catch (e) {
    res.status(500).json({ message: e.toString() });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const productById = product.find((item) => item.id === Number(id));
    if (!productById) {
      return res
        .status(404)
        .json({ statusCode: 404, message: "product not found" });
    }
    res.status(200).json({
      message: "load data success",
      data: productById,
    });
  } catch (e) {
    res.status(500).json({ statusCode: 500, message: e.toString() });
  }
};

const createNewProduct = async (req, res) => {};

export { getAllProduct, getProductById, createNewProduct };
