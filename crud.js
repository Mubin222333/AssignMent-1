var p,e,a,a1

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
    a1 = snap.val();
    let c1 = Object.keys(a1)
    document.getElementById("m-body").innerHTML =   c1;
   })
} 

function Search(){
    firebase
    .database()
    .ref("Fathers/")
    .on("value",(snap)=>{
     a1 = snap.val();
     let search = document.getElementById("SRCH").value.toUpperCase();
     let len = Object.keys(a1).length;
     for(let i=0; i<len; i++){
       let kk = Object.keys(a1)[i]
       let jj = kk.toUpperCase();
       if(jj.indexOf(search) > -1){
        document.getElementById("opn").click();
        
        document.getElementById('m1-body').innerHTML = Object.keys(a1)[i]+": "+JSON.stringify(a1[ Object.keys(a1)[i]]);
       }
       
     }
     
    });

 
}
