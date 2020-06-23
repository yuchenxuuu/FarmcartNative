let User = require('../model/user.model');
const HttpError = require('../model/http-error');
const getLocationforAddress = require('../helper/location');

const getAllUser = (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
}
//add a user
const signup = async (req, res, next) => {
    
    const { username, email, password, usertype, address} = req.body;

    // parse the current user location by its give address
    let location;
    try{
        location = await getLocationforAddress(address);
        console.log(location);
    }catch(error){
        return next(error);
    }
    // check if there is an existing user
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email })
    } catch (err) {
        const error = new HttpError(
        'Signing up failed, please try again later.',
        500
        );
        return next(error);
    }
    // cannot sign up with same email
    if (existingUser) {
        const error = new HttpError(
        'User exists already, please login instead.',
        422
        );
        return next(error);
    }
    // create the new user
    const newUser = new User({username,email,password,usertype,address,location});
  
    
    newUser.save()
     .then(() => res.json('New user added!'))
     .catch(err => res.status(400).json('Error: ' + err));
}

// get user by its id
const getUserById = (req, res, next) =>  {
    User.findById(req.params.id)
     .then(user => res.json(user))
     .catch(err => res.status(400).json('Error: ' + err));
     
};

const updateUserById = (req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.name = req.body.name;
        user.description = req.body.description;
        user.creator = req.body.creator;
        user.address = req.body.address;
        // let location;
        // try{
        //     location = await getLocationforAddress(address);
        //     user.location = location;
        //     console.log(location);
        // }catch(error){
        //     return next(error);
        // }
        
        user.save()
         .then(() => res.json('User updated'))
         .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

// login the current user
const login = async (req, res,next) => {
    const { email, password } = req.body;

    let existingUser;
  
    try {
      existingUser = await User.findOne({ email: email })
    } catch (err) {
      const error = new HttpError(
        'Logging in failed, please try again later.',
        500
      );
      return next(error);
    }
    
    if(!existingUser || existingUser.password !== req.body.password ){
        const error = new HttpError(
            'Invalid credentials, could not log you in.',
            401
          );
          return next(error);
    }
    res.json({message: 'Logged in!'});
};

exports.getAllUser = getAllUser;
exports.getUserById = getUserById;
exports.signup = signup;
exports.updateUserById = updateUserById;
exports.login = login;