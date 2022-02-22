const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connection Successful");
  });

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, " a tour must have a name"],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: { type: Number, required: [true, "a tour must have a price"] },
});

const Tour = mongoose.model("Tour", tourSchema);

const testTour = new Tour({
  name: "Grand theatre",
  rating: 4.3,
  price: 200,
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
