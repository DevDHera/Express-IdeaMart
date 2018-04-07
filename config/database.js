if(process.env.NODE_ENV === 'production'){
    module.exports = {
        mongoURI: 'mongodb://devd:devd@ds237979.mlab.com:37979/vidjot-prod'
    }
}else{
    module.exports = {
        mongoURI: 'mongodb://localhost/vidjot-dev'
    }
}