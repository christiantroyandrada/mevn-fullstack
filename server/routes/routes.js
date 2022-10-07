const API = require('../controllers/api');
const multer = require('multer');

//multer middleware for image handling
let store = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads')
    },
    filename: (req, file, callback) => {
        callback(null, file.fieldname+"_"+Date.now()+"_"+file.originalname)
    }
})
let upload = multer({
    storage: store
}).single("image");

module.exports = (app) => {
    app.get('/api/blogs', API.fetchAllPosts);
    app.get('/api/blogs/:id', API.viewPost);
    app.post('/api/blogs', upload, API.createPost); //add multer image uplaod to post route
    app.patch('/api/blogs/:id', upload, API.updatePost);
    app.delete('/api/blogs/:id', API.deletePost);
};