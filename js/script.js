/*
//import users from '../Test.json' assert { type: 'JSON' };
//console.log(users.All_Tests);

const express= require("express");

const app = express();
const port = process.env.SERVER_PORT || 5555;

 Add Access Control Allow Origin headers
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api", (req, res) => {
  res.json("Hello");
});

app.listen(port, () => console.log(`Listening on port ${port}`));


fetch("https://creatorapp.zohopublic.com/technoset/tarek/json/All_Tests/x90jQEjChAJG3vpVRUPe2XF1Ogxk804h2rNRmVTQ5nNZQJMyW17a47vTf7N7bxsM02p2zJRDR4ZT4GmgPOQpJVVhfsx125mjzqm4" ,
    {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then((response) => response.json())
    .then((data) => console.log(data.All_Tests[1].Email));
 
}

*/
//fetch("https://creatorapp.zohopublic.com/technoset/tarek/json/All_Tests/x90jQEjChAJG3vpVRUPe2XF1Ogxk804h2rNRmVTQ5nNZQJMyW17a47vTf7N7bxsM02p2zJRDR4ZT4GmgPOQpJVVhfsx125mjzqm4" ,



fetch("https://creatorapp.zohopublic.com/technoset/tarek/json/All_Tests/x90jQEjChAJG3vpVRUPe2XF1Ogxk804h2rNRmVTQ5nNZQJMyW17a47vTf7N7bxsM02p2zJRDR4ZT4GmgPOQpJVVhfsx125mjzqm4",
{
    method: 'Get',    
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    
    }
  })
  .then((response) => response.json())
  .then((data) =>
  {
   
    
      document.getElementById("getdatajson").innerHTML =  data.map( (re)=>"<li>"+ re.All_Tests.Email+"</li>"+ "</br>" )
  }).catch((err)=>{
    console.log(err);
  })





/*
window.onscroll = function () {
  if (window.innerWidth < 765) {
    if (window.scrollY > 300) {
      let r = document.getElementById("sq");
      r.style.animation = "left 1.4s ease";
    }
  }

  if (window.scrollY > 60) {
    $(".d-btn .btn").css({
      right: "18px",
      transition: ".3s",
    });
  } else {
    $(".d-btn .btn").css({
      right: "-50px",
      transition: ".3s",
    });
  }
};

$(".d-btn .btn").click(function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
*/