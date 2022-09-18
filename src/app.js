require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

//rutas por entidad
const proyectoroutes = require("./routes/proyecto.routes");

//set app
const app = express();

//settings
app.set("port", process.env.PORT || 3000);
app.use(express.json());

//middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(
  express.urlencoded({
    extended: false,
  })
);

//routes
app.use("/api/proyecto", proyectoroutes);

//init
app.listen(app.get("port"), () => {
  console.log(`API running at http://localhost:${app.get("port")}`);
});
