const express = require('express');
const loginRouter = express.Router();

function router(nav2){
    
    
        
    // acessing author page
    
    loginRouter.get('/',function(req,res){
        res.render('login',{
            nav2,
            title:'Login',
            
    
        });
    });
    
    return loginRouter;
    }
    
    
    module.exports = router;