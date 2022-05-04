const router = require("express").Router();
const Author = require("../models/Author.model");

const {isLoggedIn} = require("../middleware/route-guard");  //object


//READ: display list of authors

router.get("/authors", (req, res, next) => {

    Author.find() 
      .then ( (authorsArr) => {
          console.log(authorsArr)
        res.render("authors/authors-list", {authors: authorsArr})
    })
    .catch((err) => {
      console.log("error getting authors from DB", err)
      next(err); 
    });
});



module.exports = router;