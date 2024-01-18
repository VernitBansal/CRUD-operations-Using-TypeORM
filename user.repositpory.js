const db = require('../mysql');

//INSERT
async function insert(body) {
    const bookRepo = db.getRepository("users");
    await bookRepo.save(body);
    return { status: 200 };
};

//SEARCH
async function search(query){
    const bookrepo = db.getRepository("users");
    const data = await bookrepo.findOne({where: query});
    return data;
};


//DELETE
async function Delete(id) {
    const bookRepo = db.getRepository("users");
    await bookRepo.delete(id);
    return { status: 200 };
};

//UPDATE
async function update(body) {
    const bookRepo = db.getRepository("users");
    await bookRepo.update(body.id, {name: body.name});
    return { status: 200 }
};

module.exports = {
    insert, 
    search,
    Delete,
    update
};
