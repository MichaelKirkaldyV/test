
var path = require("path");
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

app.use(express.static( __dirname + "/public/dist" ));


app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./public/dist/public/index.html"))
});

//listen
var server = app.listen(PORT, function() {
	console.log("listening on port 3000");
});
