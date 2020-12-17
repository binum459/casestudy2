const express = require('express');
const signupRouter = express.Router();



function router(nav2){
    
           
    // acessing author page
    
    signupRouter.get('/',function(req,res){
        
        res.render('signup',{
            nav2,
            title:'SignUp',
            
            
    
        });
    });
    
    return signupRouter;
    }
    
    
    module.exports = router;