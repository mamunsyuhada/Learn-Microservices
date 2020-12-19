const bcrypt = require('bcrypt');
const Validator = require('fastest-validator');
const { v4: uuidv4 } = require('uuid');

const v = new Validator();

const { User } = require('../../../models')

module.exports = async(req, res) => {
    const schema = {
        name: 'string|empty:false',
        email: 'string|empty:false',
        password: 'string|min:6',
        profession: 'string|optional'
    }

    const validate = v.validate(req.body, schema);

    if(validate.length){
        return res.status(400).json({
            status: 'error',
            message: validate
        });
    }

    const user = await User.findOne({
        where:{ email: req.body.email}
    })

    if(user){
        return res.status(409).json({
            status: 'error',
            message: 'email already exist'
        });
    }

    const password = await bcrypt.hash(req.body.password, 10);

    const data = {
        id: `user-${uuidv4()}`,
        password: password,
        name : req.body.name,
        email: req.body.email,
        profession: req.body.profession,
        role: req.params.role
    }

    const createUser = await User.create(data)

    return res.json({
        status: 'success',
        data: {
            id: createUser.id
        }
    })
}
