import express from "express";
import cors from 'cors';
import transitionsRoutes from "./routes/transitionsRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";


const app = express();
app.use(cors());
app.use(express.json());
app.use(usersRoutes);
app.use(transitionsRoutes);

app.listen(5000, () => console.log("Server running in port: 5000"));