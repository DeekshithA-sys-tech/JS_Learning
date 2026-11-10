//CALLBACK HELL

function getdata(data,callbacknextdata){
    console.log(`getting data ${data}`);
    setTimeout(()=>{
        
        
        callbacknextdata(data);
    },3000)
}
getdata(1,(data)=>{
    console.log("Data="+data);
    getdata(2,(data)=>{
        console.log("Data="+data);
        getdata(3,(data)=>{
            console.log("data="+data);
            
        })
        
    })
})
