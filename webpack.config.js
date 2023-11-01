const path = require('path');

module.exports = {
    entry : './src/app.js',
    output : {
        // node comand to have the path of the folder ==path.join(__dirname, 'public')
        // the path of the ouput
        path: path.join(__dirname, 'public'),
        // the output file 
        filename: 'bundle.js'
         
    },
    module:{
        rules:[{
            loader:'babel-loader',
            test:/\.js$/,
            exclude:/node_modules/
        },{
            //the webpack read the css file
            test:/\.s?css$/,
            use:[
                // dom the content of css file to the DOM in style tag
                'style-loader',
                // read the css fille in css-loader
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    // we can check the error in its spesific file 
    devtool:'cheap-module-eval-source-map',
    devServer:{
        contentBase:  path.join(__dirname, 'public'),
        //to handle the client route
        historyApiFallback:true
    },
 
   
};

//leader 
// install babel-core allow us to run the app from tools like webpack (babel cli allow us to run the app from command line)
// babel-loader is a webpack plogin teach webpack how to run babel when webpack see some files 
