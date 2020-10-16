var express=require('express');
var app=express();
var fs = require('fs');
app.set('view engine','ejs');
// app.set('view engine','html');
require('dotenv').config();
var debug = require('debug')('http');
var morgan = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var router = express.Router();
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false})); // support encoded bodies
// app.use('/assets', express.static('./public'));
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 2525,
  service: 'gmail',
  auth: {
    user: 'helpify123@gmail.com',
    pass: '02512609841'
  }
});

var mysql = require('mysql');
var con = mysql.createConnection({
 host: "localhost",
 user: "root",
 password: "2609841",
 database: "emp"
});


app.use(express.static(__dirname + '/public'));

 con.connect(function(err) {
  if (err) throw  err;
  console.log("connected");});

var mysqlAdmin = require('node-mysql-admin');

app.use(mysqlAdmin(app));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'main.html'));
});






app.get('/admin', function(req,res) {
  var err=false;
  var corr=false;
  res.render('admin',{err:err});
  // body...
});
app.get('/admin/add', function(req,res) {
res.sendFile(path.join(__dirname,'infor.html'));
  // body...
});
app.get('/manager', function(req,res) {
  var err=false;
  var corr=false;
  res.render('man',{err:err});
  // body...
});
app.get('/emp', function(req,res) {
  var err=false;
  var corr=false;
  res.render('emp',{err:err});
  // body...
});

app.get('/admin/req', (req, res) => {
   con.query('SELECT * FROM inform WHERE mid=id', function(err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        // console.log(result)}
        var err=true;
        var corr=false;
        res.render('req',{err:err,data:result,corr:corr});
      } else {
        var err=false;
        var corr=true;
        res.render('req',{err:err,corr:corr});
      }     
    });


});
app.get('/admin/inf', (req, res) => {
   con.query('SELECT * FROM inform ', function(err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        // console.log(result)}
        var err=true;
        var corr=false;
        res.render('w',{err:err,data:result,corr:corr});
      } else {
        var err=false;
        var corr=true;
        res.render('w',{err:err,corr:corr});
      }     
    });


});
app.post('/admin', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username);
  console.log(password);
    con.query('SELECT * FROM admin WHERE emp = ? AND pass = ?', [username, password], function(err, result, fields) {
      if (err) throw err;
      
      if (result.length > 0) {
        console.log(result)
        res.sendFile(path.join(__dirname,'amain.html'));
      } else {
        console.log('error')
        var err=true;
        res.render('admin',{err:err})
      }     
    });

});
app.post('/admin/d', function(req, res) {

  var sql = "INSERT INTO inform (fname,lname,id,salary,mid,email) VALUES ('"+req.body.fname+"','"+req.body.lname+"','"+req.body.id+"','"+req.body.sal+"','"+req.body.mid+"','"+req.body.email+"')";
  con.query(sql, function(err, result)  {
    // console.log("i am query")
   if(err) throw err;
   // console.log("table created");
   
      var mailOptions = {
    from: 'helpify123@gmail.com',
    to:req.body.email,
    subject: 'welcome to the company',
    text: "your em-id id "+req.body.id+" and your username is "+req.body.id+" and your password is "+req.body.id+" welcome "};
// console.log(Object.assign({}, mailOptions)); 
  transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
});
if(req.body.id==req.body.mid)
{
 var sql = "INSERT INTO manager (emp,pass) VALUES ('"+req.body.id+"','"+req.body.mid+"')"; 

con.query(sql, function(err, result)  {
    // console.log("i am query")
   if(err) throw err;
   // console.log("table created");
   
  });

}
else{
  var sql = "INSERT INTO empl (emp,pass) VALUES ('"+req.body.id+"','"+req.body.id+"')"; 

con.query(sql, function(err, result)  {
    // console.log("i am query")
   if(err) throw err;
   // console.log("table created");
   
  });

}
  res.sendFile(path.join(__dirname,'amain.html'));
});
app.post('/delete/:_id', function(req, res, next){
var ser=req.params._id;
var r = req.body.mid;
console.log(req.body.mid)
console.log(ser)
con.query('UPDATE inform SET rating = ? WHERE id = ?  ',[r,ser], function(err, result, fields) {
  if (err) throw err;
  console.log(result);
}); 

});
app.post('/delete1/:_id', function(req, res, next){
var ser=req.params._id;
var r=1;
con.query('UPDATE inform SET active= ? WHERE id = ?',[r,ser], function(err, result, fields) {
  if (err) throw err;
  console.log(result);
}); 

});
app.post('/delete2/:_id', function(req, res, next){
var ser=req.params._id;
var r=0;
con.query('UPDATE inform SET active= ? WHERE id = ?',[r,ser], function(err, result, fields) {
  if (err) throw err;
  console.log(result);
}); 

});
app.post('/del/:_id', function(req, res, next){
var ser=req.params._id;
console.log(ser);


  con.query('SELECT * FROM inform WHERE id = ?',[ser], function (err, result) {
    if (err) throw err;
    var temp=result[0].id;
    if(result[0].id==result[0].mid){
      con.query('DELETE FROM manager WHERE emp = ? ',[temp], function (err, result) {
  if (err) throw err;
 console.log("Number of records deleted: " + result.affectedRows);
});
    }
else{
  con.query('DELETE FROM empl WHERE emp = ? ',[temp], function (err, result) {
  if (err) throw err;
 console.log("Number of records deleted: " + result.affectedRows);
});
}
  res.redirect('/admin/inf')
  });
con.query('DELETE FROM inform WHERE id = ? ',[ser], function (err, result) {
  if (err) throw err;
 console.log("Number of records deleted: " + result.affectedRows);
});


});
//manger partus
app.post('/manager', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username);
  console.log(password);
    con.query('SELECT * FROM manager WHERE emp = ? AND pass = ?', [username, password], function(err, result, fields) {
      if (err) throw err;
      
      if (result.length > 0) {
        console.log(result)
        res.redirect('/manager/'+req.body.username);

         

      } else {
        var err=true;
        res.render('man',{err:err})
      }     
    });

});
app.get('/manager/:_id', function(req,res) {

res.sendFile(path.join(__dirname,'aman.html'));
});
app.get('/manager/empr/:_id', function(req,res) {
var ser=req.params._id;
console.log(ser);
   con.query('SELECT * FROM inform WHERE mid = ? and mid!=id',[ser], function(err, result, fields) {
      if (err) throw err;
      if (result.length > 0) {
        var err=true;
        var corr=false;
        res.render('empr',{err:err,data:result,corr:corr});
      } else {
        var err=false;
        var corr=true;
        res.render('empr',{err:err,corr:corr});
      }     
    });


});
app.get('/manager/rating/:_id', function(req,res) {
var ser=req.params._id;

   con.query('SELECT * FROM inform WHERE id = ?',[ser], function(err, result, fields) {
      if (err) throw err;
      if (result.length>0){
      if (result[0].active) {
        var a=Number(result[0].salary)
        var b=Number(result[0].rating)
        var err=true;
        var corr=false;
        var r =a+(a*b)/100;
        console.log(r);
        res.render('manr',{err:err,r:r,data:result,corr:corr});
      } else {
        var err=false;
        var corr=true;
        res.render('manr',{err:err,data:result,corr:corr});
      } 
      }    
    });


});





app.post('/emp', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;
  console.log(username);
  console.log(password);
    con.query('SELECT * FROM empl WHERE emp = ? AND pass = ?', [username, password], function(err, result, fields) {
      if (err) throw err;
      
      if (result.length > 0) {
        console.log(result)
        res.redirect('/empi/'+req.body.username);
      } else {
        var err=true;
        res.render('emp',{err:err})
      }     
    });

});

app.get('/empi/:_id', function(req,res) {

res.sendFile(path.join(__dirname,'aemp.html'));
});

app.get('/empi/emprating/:_id', function(req,res) {
var ser=req.params._id;

   con.query('SELECT * FROM inform WHERE id = ?',[ser], function(err, result, fields) {
      if (err) throw err;
      if (result.length>0){
      if (result[0].active) {
        var a=Number(result[0].salary)
        var b=Number(result[0].rating)
        var err=true;
        var corr=false;
        var r =a+(a*b)/100;
        console.log(r);
        res.render('rr',{err:err,r:r,data:result,corr:corr});
      } else {
        var err=false;
        var corr=true;
        res.render('rr',{err:err,data:result,corr:corr});
      } 
      }    
    });


});







app.listen(3000);
console.log('you are listening to port 3000')

