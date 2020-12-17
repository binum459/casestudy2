const express = require('express');
const app =  express();

const port = process.env.PORT || 5000;

const nav1 = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/author',
        name:'Authors'
},
{
    link:'/addbooks',
    name:'Add Books'
},
{
    link:'/addauthors',
    name:'Add Authors'
}

];


const nav2 = [
{
    link:'/login',
    name:'Login'
},
{
    link:'/signup',
    name:'SignUp'
}];



const booksRouter = require('./src/routes/bookRoutes')(nav1)
const authorRouter = require('./src/routes/authorRoutes')(nav1)
const loginRouter = require('./src/routes/loginRoutes')(nav2)
const signupRouter = require('./src/routes/signupRoutes')(nav2)
const addbooksRouter = require('./src/routes/addbooksRoutes')(nav1)
const addauthorsRouter = require('./src/routes/addauthorsRoutes')(nav1)

// static files like css,js is accesed
app.use(express.static('./public'));  

app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/author',authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbooks',addbooksRouter);
app.use('/addauthors',addauthorsRouter);

app.get('/',function(req,res){
    res.render('index',
    {
        nav1,
        nav2,
        title:'Library'
    });
});


// listen on port

app.listen(port,()=>{console.log('server is ready at '+port)});
