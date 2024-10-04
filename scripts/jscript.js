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


