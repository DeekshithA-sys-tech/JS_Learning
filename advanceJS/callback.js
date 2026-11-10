function sum(a,b){
    let res=a+b
    console.log(res);
    return res;
    
    
}

function add(a,b,CALLBACK){
    console.log(a,b);
    
    return CALLBACK(a,b);

}

console.log(add(5,3,sum));












