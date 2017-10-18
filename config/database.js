if (process.env.NODE_ENV === 'production') {
    module.exports = {mongoURI: 'mongodb://bozhinovski:geronimo@ds123695.mlab.com:23695/videoidea-prod'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/video-ideas-dev'}
}