const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

// -----------CGPA CALCULATOR--------------

app.get("/cgcalculator", function(req, res){
    res.sendFile(__dirname + "/cgCalc.html");
})

app.post("/cgcalculator", function(req, res){
    
    // parseFloat for decimal number
    var n1 = parseFloat(req.body.Num1);  
    var n2 = parseFloat(req.body.Num2);  
    var n3 = parseFloat(req.body.Num3);  
    var n4 = parseFloat(req.body.Num4);  
    var n5 = parseFloat(req.body.Num5);  
    var n6 = parseFloat(req.body.Num6);  
    var n7 = parseFloat(req.body.Num7);  
    var n8 = parseFloat(req.body.Num8);  

    var result = (n1*20) + (n2*20) + (n3* 22) + (n4* 22) + (n5*22) + (n6*23) + (n7*22) + (n8*20);
    var div = 0;
    if(n1 != 0){
        div += 20;
    }
    if(n2 != 0){
        div += 20;
    }
    if(n3 != 0){
        div += 22;
    }
    if(n4 != 0){
        div += 22;
    }
    if(n5 != 0){
        div += 22;
    }
    if(n6 != 0){
        div += 23;
    }
    if(n7 != 0){
        div += 22;
    }
    if(n8 != 0){
        div += 20;
    }
    result = result/div;
    res.send("Your gpa is " + result);
});

app.listen(3000, function(){
    console.log("Server started on port 3000");
})