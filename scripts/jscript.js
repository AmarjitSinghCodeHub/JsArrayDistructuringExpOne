const MyFun=()=>{
    let arr1=["apple","mango","orange","Blueberry","Watermalon"];

    //let [a,b]=[...arr1];
     //let [a,,b]=[...arr1];
   // let [a,,b,,c]=[...arr1];

   let [a,b,...c]=[...arr1];


      // console.log(`a = ${a} and b=${b}`);

   console.log(`a = ${a} and b=${b} and c=${c}`);
   console.log(c);


}


const MyFunc2=()=>{

    let arr1=[88];
        let [a=10,b=50]=arr1;  // we can set default value of a and b.
    
        console.log(`value of a=${a} and value of b=${b}`);
    
        let arr2=[];
    
        let [x=50,y=45]=arr2;
    
        console.log(`value of x=${x} and value of y=${y}`);
    
    }