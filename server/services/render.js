//this file allows us to render different files using router
const axios = require("axios");


//get the user from the apis
exports.homeRoutes = (req, res) => {
  //make a get request to the api users

  axios
    .get("http://localhost:8000/api/users")
    .then(function (response) {
      res.render("index", { user: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};


//add user
exports.add_user = (req, res) => {
  res.render("add_user");
};


//update the user
exports.update_user = (req, res) => {
  axios
    .get("http://localhost:8000/api/users", { params: { id: req.query.id } })
    .then(function (userData) {
      res.render("update_user", { user: userData.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
