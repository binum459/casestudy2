const express = require('express');
const addbooksRouter = express.Router();
const Bookdata = require('../model/bookdata');
function router(nav1){
    
            
    // acessing author page
    
    addbooksRouter.get('/',function(req,res){
        res.render('addbooks',{
            nav1,
            title:'Add Book'
            
    
        });
    });

    addbooksRouter.get('/add',function(req,res){
        var item = {
            title:req.query.title,
            author:req.query.author,
            genre:req.query.genre,
            image:req.query.image
        }
       var Book = Bookdata(item);
       Book.save();
       res.redirect('/books');         
       
    });

    
    
    return addbooksRouter;
    }
    
    
    module.exports = router;