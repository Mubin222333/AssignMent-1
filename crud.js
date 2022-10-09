var p,e,a

function gather_info(){
    p = document.getElementById("Num").value;
    e = document.getElementById("name").value;
    a = document.getElementById("Add").value;
}

function Go(){
    gather_info()
    firebase
    .database()
    .ref("Fathers/"+e+"/")
    .set({
       'Phone Number':p,
       'Address':a
    });
    document.getElementById("f").innerHTML = "Father: "+e;
    document.getElementById("p").innerHTML = "Phone Number: "+p;
    document.getElementById("a").innerHTML = "Address: "+a;
    document.getElementById("clo").click()
}

function Show_All(){
   firebase
   .database()
   .ref("Fathers/")
   .on("value",(snap)=>{
    var a = snap.val();
    document.getElementById("m-body").innerHTML =   Object.keys(a);
  
    
   })
} 
