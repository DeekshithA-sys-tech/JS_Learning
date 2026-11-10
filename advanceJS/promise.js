//PROMISE = ITS AN OBJECT USED FOR EVANTUAL EXECUTION OF ASYNCHRONUS PROGRAM AND RETURN ITS VALUE
// generally it has 3- states---->1)pending state  2)fulfilled/resolved state  3)rejected state
// and promise takes two handlers  1)resolve 2)reject
// WE use .then() function to handle the resolve handler
// and .catch() funtion to handle the error/reject handler

// function getdata(data){
//     return new Promise((resolve,reject)=>{
//         console.log("fetching the data",data);       
//         setTimeout(()=>{    
//             found=true;
//             if(found){
//                 console.log("DATA : "+data);
//                 resolve("success")
//             }else{
//                 console.log("data not found");
                
//                 reject("rejected")
//             }  
            
            
//         },3000)
//     })
// }
// getdata(1)
// .then(mes=>{
//     console.log(mes); 
//     return getdata(2)
//     .then((msg)=>{
//         console.log(msg); 
//         return getdata(3)
//         .then((msg)=>{
//             console.log(msg); 
//         })
//     })  
// }).catch(msg=>{
//     console.log(msg);
    
// })


//fetching API
fetch('https://official-joke-api.appspot.com/random_joke')
    .then((response)=>{
        return response.status;
    })
    .then((data)=>{
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
    
    

