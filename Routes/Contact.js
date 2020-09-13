var express=require('express');
var router=express.Router();
router.get('/',function(req,res){
    res.render('Contact',{title:'Contact'});
});
module.exports=router;