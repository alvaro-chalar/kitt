module.exports = {
  development: {
    db: "mongodb+srv://test:secret/car?retryWrites=true&w=majority",
    port: process.env.PORT || 3000,
  },
};
