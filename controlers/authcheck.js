const jwt= require('jsonwebtoken');


const authcheck=(req, res, next) => {
    const token=req.cookies.access_token;
    try {
        let decoded=jwt.verify(token, 'loginToken');
        console.log(decoded.username, decoded.password)
      } catch(err) {
        var error=err;
      }
      if (error) {
        res.send('you need to log in')
      }
      else {
          next();
      }
}

module.exports = authcheck;