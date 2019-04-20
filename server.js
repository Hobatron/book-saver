const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose")
const db = require("./BookSchema")

// Define middleware here
app.use(express.urlencoded({
	extended: true
}));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
};

mongoose.connect('mongodb://localhost:27017/book_db', {
	useNewUrlParser: true
});

// Define API routes here
app.post("/api/add", (req, res) => {
	db.create(req.body.bookInfo)
		.then((results) => {
			res.json({
				results
			})
		})
})

app.get("/api/books", (req, res) => {
	db.find().then((books) => {
		res.json({
			books
		})
	})
})

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
	console.log(`🌎 ==> API server now on port ${PORT}!`);
});