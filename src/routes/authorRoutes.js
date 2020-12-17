const express = require('express');
const authorRouter = express.Router();
const authordata = require('../model/authordata');
function router(nav1){
// array of books
var authors =[
    {
        
        author:'Dan Brown',
        genre:'Thriller',
        image:'dan.jpg'
    },
    {
        
        author:'Paulo Coelho',
        genre:'Fantasy',
        image:'paulo.jpg'
    },
    {
        
        author:'Robert Kiyosaki',
        genre:'Self-help',
        image:'rob.jpg'
    },
    {
        
        author:'Chetan Bhagat',
        genre:'Drama',
        img:'chet.jpg'
    },
    {
        
        author:'Agatha Christie',
        genre:'Detective',
        image:'aga.jpg'
    },
    {
        
        author:'J.K Rowling',
        genre:'Fantasy',
        image:'jk.jpg'
    }
]
// acessing author page
authorRouter.get('/',function(req,res){
    authordata.find()
    .then(function(authors){
        res.render('authors',{
            nav1,
            title:'Library',
            authors
    
        });
    });
    })
    authorRouter.get('/delete/:id',function(req,res){
        
        authordata.findByIdAndRemove(req.params.id, (err, doc) => {
            if (!err) {
                res.redirect('/author');
            }
            else { console.log('Error in  delete :' + err); }
        });
    });

    authorRouter.get('/update/:id', (req, res) => {
        authordata.findById(req.params.id, (err, doc) => {
            if (!err) {
                res.render("/addauthors", {
                    viewTitle: "Update ",
                    authordata: doc
                });
            }
        });
    });

return authorRouter;
}

module.exports = router;