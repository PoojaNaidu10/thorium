
const BookModel = require("../Model/BookModel")
const UserModel = require("../Model/UserModel")


const isValid = function (value) {
  if (typeof value == undefined || value == null) return false;
  if (typeof value === "string" && value.trim().length === 0) return false;
  return true;
};
  

  const isBodyRequestValid = function (requestBody) {
    return Object.keys(requestBody).length > 0
  }

  function isValidDate(dateString) {
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)) return false;  // Invalid format
    var d = new Date(dateString);
    var dNum = d.getTime();
    if(!dNum && dNum !== 0) return false; // NaN value, Invalid date
    return d.toISOString().slice(0,10) === dateString;
  }

 


const CreateBook = async function (req, res){
    try{
         let requestBody=req.body
        
         if(!isBodyRequestValid(requestBody)){
            return res.status(400).send({status:false, msg:"No input provided"})
             }
        
          const {title,excerpt,userId,ISBN,category,subcategory,reviews,releasedAt,bookCover} = requestBody

          if(!isValid(title)){
            return  res.status(400).send({status:false, msg:"title is required"})
          }

          const isTitleUsed = await BookModel.findOne({title})
          if (isTitleUsed) {
            return res.status(400).send({status:false, msg:"title should be unique"})
          
         }

         if(!isValid(excerpt)){
          return  res.status(400).send({status:false, msg:"excerpt is required"})
        }

        if(!isValid(userId)){
          return   res.status(400).send({status:false, msg:"userId is required"})
        }

        const isUserIdExist = await UserModel.findOne({ _id:userId})
        if (!isUserIdExist) {
           return res.status(400).send({status:false, msg:"The userId doen't exist in user collection"})
        }

        if(!isValid(ISBN)){
           return res.status(400).send({status:false, msg:"ISBN is required"})
        }

        const isISBNExist = await BookModel.findOne({ISBN})
        if (isISBNExist) {
           return res.status(400).send({status:false, msg:"The ISBN already exist in Book collection"})
        }

        if(!isValid(category)){
          return   res.status(400).send({status:false, msg:"category is required"})
        }

        if(!isValid(subcategory)){
          return  res.status(400).send({status:false, msg:"subcategory is required"})
        }

        if(!isValid(reviews)){
          return  res.status(400).send({status:false, msg:"reviews is required"})
        }

        if(!isValid(releasedAt)){
          return  res.status(400).send({status:false, msg:"releasedAt is required"})
        }

        if(!isValidDate(releasedAt)){
        return  res.status(400).send({status:false, msg:"releasedAt is not valid it should be YYYY-MM-DD"})
      }

      if(!isValid(bookCover)){
        return  res.status(400).send({status:false, msg:"bookCover is required"})
      }

         const NewBook = await BookModel.create(requestBody)
         res.status(201).send({status:true, msg:"New Book created", data:NewBook})

         

    }
    catch(error){
       res.status(500).send({status:false, mag:error.msg})
    }
}

module.exports.CreateBook=CreateBook