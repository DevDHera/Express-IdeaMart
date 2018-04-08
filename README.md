# Express-IdeaMart

Fully Node and Express based IdeaMart for publish new inovative ideas. 

Passport is used to ensure authentication.

## Technologies Used

* Node.js
* Express.js
* Passport.js
* Handlebars
* Flash messaging
* MLab NoSQL Database

## Steps to Run

Project consists of local DB constraints. To run the project on local machine follow the steps shown below.

1. Install the modules.
```bash
npm install
```
2. Simply run the app using following.
```bash
npm start
```

## Authentication 

Project uses Passport local strategies to authenticate users. 

```javascript
module.exports = function(passport){
    passport.use(new LocalStrategy({usernameField: 'email'}, (email, password, done) => {
        //Match User
        User.findOne({
            email: email
        }).then(user => {
            if(!user){
                return done(null, false, {message: 'No User Found'});
            }

            //Match Password
            bcrypt.compare(password, user.password, (err, isMatch) => {
                if(err) throw err;
                if(isMatch){
                    return done(null, user);
                }else{
                    return done(null, false, {message: 'Password Incorrect'});
                }
            })
        })
    }));
```

## Task to achive

* [x] User Authentication
* [ ] Google Auth
* [ ] Facebook Auth


