const AuthorModel= require("../models/authorModel")
const jwt = require("jsonwebtoken");
const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const loginAuthor = async function (req, res) {
    let userName = req.body.email;
    let password = req.body.password;
  
    let Author = await AuthorModel.findOne({ emailId: userName, password: password });
    if (!Author)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
  
    
    let token = jwt.sign(
      {
        AuthorId: Author._id.toString(),
        batch: "thorium",
        organisation: "FUnctionUp",
      },
      "functionup-thorium"
    );
    res.setHeader("x-api-key", token);
    res.send({ status: true, data: token });
  };
  


module.exports.createAuthor= createAuthor
module.exports.loginAuthor=loginAuthor
