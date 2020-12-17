const express = require('express');
const addauthorsRouter = express.Router();
const authordata = require('../model/authordata');
function router(nav1){
    
    
        
    // acessing author page
    
    addauthorsRouter.get('/',function(req,res){
        res.render('addauthors',{
            nav1,
            title:'Add Author',
            
    
        });
    });
    
    addauthorsRouter.get('/add',function(req,res){
        var item = {
            author:req.query.author,
            genre:req.query.genre,
            book1:req.query.book1,
            book2:req.query.book2,
            image:req.query.image
        }
       var authors = authordata(item);
       authors.save();
       res.redirect('/author');         
       
    });

    return addauthorsRouter;
    }
    
    
    module.exports = router;