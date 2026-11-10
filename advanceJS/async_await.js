function getdata(data){
    return new Promise((resolve,reject)=>{
        console.log(`getting data ${data}`);
        setTimeout(()=>{
            console.log(`Data:${data}`);
            resolve(200);
        },2000)

    })
}
async function getalldata(){
    await getdata(1)
    await getdata(2)
    await getdata(3)
}
getalldata();

async function fetchDATA() {
    try {
        const response = await fetch(
            "https://official-joke-api.appspot.com/random_joke",
        );
        const data = await response.json;
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
