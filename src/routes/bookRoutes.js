const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/bookdata');
function router(nav1){
// array of books
var books =[
    {
        title:'Digital Fortress',
        author:'Dan Brown',
        genre:'Thriller',
        image:'dig.jpg'
    },
    {
        title:'The Alchemist',
        author:'Paulo Coelho',
        genre:'Fantasy',
        image:'alc.jpg'
    },
    {
        title:'Rich Dad Poor Dad',
        author:'Robert Kiyosaki',
        genre:'Self-help',
        image:'rich.jpg'
    },
    {
        title:'The Da Vinci Code',
        author:'Dan Brown',
        genre:'Mystery',
        image:'davinci.jpg'
    },
    {
        title:'The girl in room 105',
        author:'Chetan Bhagat',
        genre:'Fiction',
        image:'girl.jpg'
    },
    {
        title:'The 3 mistakes of my life',
        author:'Chetan Bhagat',
        genre:'Drama',
        image:'3m.jpg'
    },
    {
        title:'Sapiens: A Brief History of Humankind',
        author:'Yuval Noah Harari',
        genre:'Non-Fiction',
        image:'sa.jpg'
    },
    {
        title:'The Theory of Everything',
        author:'Stephen Hawking',
        genre:'Science',
        image:'the.jpg'
    }
]
// acessing books page


booksRouter.get('/',function(req,res){
    Bookdata.find()
    .then(function(books){
        res.render('books',{
            nav1,
            title:' Book',
            books
                  
    
        });
    });
    })

    
    booksRouter.get('/delete/:id',function(req,res){
        
        Bookdata.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.redirect('/books');
            }
            else { console.log('Error in  delete :' + err); }
        });
    });


    booksRouter.get('/update/:id', (req, res) => {
        Bookdata.findById(req.params.id, (err, doc) => {
            if (!err) {
                res.render("/addbooks", {
                    viewTitle: "Update ",
                    Bookdata: doc
                });
            }
        });
    });
        
    
    
// acessing single book
booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    Bookdata.findOne({_id: id})
    .then(function(book){
        res.render('book',{
            nav1,
            title:'Library',
            book
        })
    });
    })
    
return booksRouter;
}


module.exports = router;