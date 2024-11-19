import user from "../Model/UserModel.js";

export const CreateUser = async (req,res) =>{

    try {
        const result = await user.create(req.body);
        res.status(201).json(result); // 201 for Created
      } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err }); // 500 for Internal Server Error
      }

}

export const GetoneUSer = async (req,res) =>{
    const {id} = req.params;
    try{
        const getuserById= await user.findById(id);
        res.status(200).json(getuserById);
    }catch(err){
        console.log(err)
        res.status(500).send('Server Error');
    }
}

export const AllUser = async (req,res)=>{
    try{
        const getuser= await user.find({});
        res.status(201).json(getuser); 
    }catch(err){
        console.log(err)
    }
} 

export const UpdateUser = async (req,res)=>{
    const {id} = req.params;
    try {
        const putUser = await user.findByIdAndUpdate({_id:id},
            {name: req.body.name,
            email: req.body.email,
            age: req.body.age});
        res.status(201).json(putUser); 
      } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err });
      }
}

export const deleteUser = async (req,res) =>{

    const {id}=req.params;
    try {
        const DeleteUser = await user.findByIdAndDelete({_id:id})
        res.status(201).json(DeleteUser); 
      } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err }); 
      }

}