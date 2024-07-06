var db = require('../models')
var User = db.user;
var addUser = async (req,res) =>{
    //const jane = User.build({ firstName: "Jane" ,lastName: "zellit" });
    const jane = await User.create({ firstName: "Jane" ,lastName: "zellit" });
    console.log(jane instanceof User);
    console.log(jane.firstName);
    //jane.set({ firstName: "test3" ,lastName: "zellit"});
    await jane.update({ firstName: "test2" ,lastName: "zellit"})
    await jane.save();
    console.log('Jane was saved to the database! ');
    //await jane.destroy();
    await jane.reload();
    console.log(jane.toJSON());
    res.status(200).json(jane.toJSON());
}

module.exports={
    addUser
}