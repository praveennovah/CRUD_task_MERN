const express =require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const userModel = require("./modules/Users");

const app=express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/CRUD")

app.post("/CreateUser", async (req, res) => {
    try {
      const result = await userModel.create(req.body);
      res.status(201).json(result); // 201 for Created
    } catch (err) {
      res.status(500).json({ message: 'Error creating user', error: err }); // 500 for Internal Server Error
    }
  });

 app.get("/getUser/:id",async (req,res)=>{
     const {id} = req.params;
    try{
        const getuserById= await userModel.findById(id);
        res.status(200).json(getuserById);
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error');
    }
} )

  app.get("/", async (req,res)=>{
        try{
            const getuser= await userModel.find({});
            res.status(201).json(getuser);
        }catch(err){
            console.log(err)
        }
  } )

  app.put("/UpdateUser/:id",async (req,res)=>{
    const {id} = req.params;
    try {
        const putUser = await userModel.findByIdAndUpdate({_id:id},
            {name: req.body.name,
            email: req.body.email,
            phone: req.body.phone});
        res.status(201).json(putUser); // 201 for Created
      } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err }); // 500 for Internal Server Error
      }
    });

    app.delete("/DeleteUser/:id",async (req,res)=>{
        const {id}=req.params;
        try {
            const DeleteUser = await userModel.findByIdAndDelete({_id:id})
            res.status(201).json(DeleteUser); // 201 for Created
          } catch (err) {
            res.status(500).json({ message: 'Error creating user', error: err }); // 500 for Internal Server Error
          }
        });
  
  
app.listen(8081,()=>{
    console.log("server is running")
})