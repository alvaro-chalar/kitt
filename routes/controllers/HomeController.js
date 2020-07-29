module.exports = {
  async index(req, res) {
    const routes = [
      {
        method: "GET",
        path: "/api",
      },
      {
        method: "GET",
        path: "/api/cars",
      },
      {
        method: "GET",
        path: "/api/cars/:id",
      },
      {
        method: "POST",
        path: "/api/cars",
        payload: ["model:string:required", "registration:string:required"],
      },
      {
        method: "PUT",
        path: "/api/cars/:id",
        payload: ["model:string", "registration:string"],
      },
      {
        method: "DELETE",
        path: "/api/cars/:id",
      },
      {
        method: "GET",
        path: "/api/owners",
      },
      {
        method: "GET",
        path: "/api/owners/:id",
      },
      {
        method: "POST",
        path: "/api/owners",
        payload: ["name:string:required"],
      },
      {
        method: "PATCH",
        path: "/api/owners/:id",
        payload: ["name:string"],
      },
      {
        method: "DELETE",
        path: "/api/owners/:id",
      },
    ];

    res.status(200).json({ routes });
  },
};
