import express from "express"
import { CreateUser,GetoneUSer,AllUser,UpdateUser,deleteUser} from "../Controller/UserController.js";
const router = express.Router(); 

router.post("/CreateUser",CreateUser);

router.get("/getUser/:id",GetoneUSer);

router.get("/", AllUser);

router.put("/UpdateUser/:id",UpdateUser);

router.delete("/DeleteUser/:id",deleteUser);


export default router;
  