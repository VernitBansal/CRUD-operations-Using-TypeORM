const { insert } = require('../repository/user.repositpory');
const { search } = require('../repository/user.repositpory');
const { Delete } = require('../repository/user.repositpory');
const { update } = require('../repository/user.repositpory');


//createUser
async function createUser(req, res) {
    const { id,name, email } = req.body;

    if (!id || !name || !email ) throw new Error("Request not found");

    const obj = {
        id,
        name,
        email,
    }

    const user = await insert(obj);

    if (user.status !== 200) throw 'Something went wrong';

    res.status(200).send({ status: 200, message: 'user created..' });
};

//searchuser
async function  searchUser(req, res) {
    if (!req.query.id) throw new Error("Request not found");

    const result = await search(req.query);

    if (!result) throw 'Something went wrong';

    res.status(200).send(result);
};

//deleteUser
async function deleteUser(req, res) {
    if (!req.body.id) throw new Error("Request not found");
    
    const user = await Delete(req.body.id);

    if (user.status !== 200) throw 'Something went wrong';

    res.status(200).send({ status: 200, message: 'user Deleted..' });
};

//updateuser
async function updateUser(req,res){
    if(!req.body.id) throw new Error("Request not found");
    const Result = await search(req.body.id);
    if (!Result) throw new Error("Result not found");
    
    const User = await update(req.body);
    if (User.status !== 200) throw 'Something went wrong';
    res.status(200).send({ status: 200, message: 'user updated..' });

}

module.exports = { 
    createUser,
    searchUser,
    deleteUser,
    updateUser,
};
