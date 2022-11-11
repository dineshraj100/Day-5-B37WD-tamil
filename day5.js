// All these codes are Tested and ran on the Guvi IDE while preparing this
//print odd numbers using anonymus and iffe function
   
var arr=[2,3,4,5,6];

var oddnumber_array =function(arr){
    var oddnumbers = arr.filter((x)=>x%2!=0);
    return(oddnumbers);
    }

    console.log(oddnumber_array(arr));


var arr=[2,3,4,5,6];
    ( function(arr){
        var oddnumbers = arr.filter((x)=>x%2!=0);
        console.log(oddnumbers);
        }
    )(arr)
    
    

   
    //sum of all array elements using 
    var arrsum=[2,3,4,5,6];

    var add_array =function(arrsum){
        var sumofnumbers = arr.reduce((acc,curr)=>acc+curr,0);
        return(sumofnumbers);
        }
    
        console.log(add_array(arrsum)); 

/////////or/////////

        var arrsum=[2,3,4,5,6]
        let sum=0;
     var add_array =function(arrsum){for(i=0;i<arrsum.length;i++)
       
        sum=sum+arrsum[i]
        return sum
     }
     console.log(add_array(arrsum))


     var arr=[2,3,4,5,6];
     let sum =0;
    ( function(arr){for(i=0;i<arr.length;i++)
           
    sum=sum+arr[i];
            
    console.log(sum);
    }
    )(arr)



    /////small to capital

    var str=["guvi"]
        
     var caps =function(str){for(i=0;i<str.length;i++)
       
var ans = str[i].toUpperCase()
return ans;
}

console.log(caps(str));


 var str=["guvi"];
 var ans;
        
(function(str){for(i=0;i<str.length;i++)
       
var ans = str[i].toUpperCase()
console.log(ans);
}
)(str) 


//prime numbers anonymus and iffe

var num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let result=[]

var prime=function(num){if(num<2)
    return false;
for(let i=2;i<num;i++){
if(num%i==0){
return false
}
}
return true
}
num.forEach(function(element){
const item=prime(element)
if (item){
result.push(element)
}
});
     
console.log(result)


var num=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let result=[]

var prime=function(num){if(num<2)
    return false;
for(let i=2;i<num;k++){
if(num%k==0){
return false
}
}
return true

}

num.forEach(function(element){
const item=prime(element)
if (item){
result.push(element)
}
});
     
console.log(result)



//////median of two sorted array


var num=[1,2,3,4,5]
var num1=[6,7,8,9,10]
let arr=num.concat(num1);
let arr1 = arr.map(Number);
let ans=0;
let result =function(arr1){for(i=0;i<arr1.length;i++)
ans=ans+arr1[i];
return ans/arr1.length
}
console.log(result(arr1));



var num=[1,2,3,4,5]
var num1=[6,7,8,9,10]
let arr=num.concat(num1);
let arr1 = arr.map(Number);
let ans=0;
(function(arr1){for(i=0;i<arr1.length;i++)
ans=ans+arr1[i];
console.log(ans/arr1.length)
}
)(arr1)



//no repeatation
var arr=[1,2,3,4,5,3,5,7];

let norepeatation=function(arr){
return [...new Set(arr)];
}
console.log(norepeatation(arr));


var arr=[1,2,3,4,5,3,5,7];
(function(arr){
console.log([...new Set(arr)])
})(arr)



//rotate array k times

var arr=[1,2,3,4,5,6,7];
let k=3
var result=function(arr){
for(i=0;i<k;i++){
arr.unshift(arr.pop());
}
return arr
}
console.log(result(arr))



var arr=[1,2,3,4,5,6,7];
let k=3;
(function(arr){
for(i=0;i<k;i++){
arr.unshift(arr.pop())
}
console.log(arr);
}
)
(arr)


///////////////////////////////////arrow function////////////////////////////////////////

////print odd numbers in array

var arr=[1,2,3,4,5,6,7];
var oddnumbers=arr.filter((ele)=>ele%2!==0)
console.log(oddnumbers)


///////convert small letter to capital letter in array


var arr=["guvigeek"];
var oddnumbers=arr.filter((ele)=>
console.log(ele.toUpperCase()))

////////sum of all numbers in array


var arr=[1,2,3,4,5];
var sum=arr.reduce((sum,ele)=>sum+=ele,0)
console.log(sum);

//////return all prime number in array


var arr=[1,2,3,4,5,6,7,8,9,10];
var prime=arr.filter((ele)=>{
for(let i=2;i<ele;i++){
if(ele % i === 0){
return false;}
}
return ele !==1;
});
console.log(prime);


//////palindrome or not



var arr=["civic"];
var pali=arr.filter((ele)=>
{
if(ele.split("").reverse().join("")===ele){
console.log(arr)
}
else{
console.log("not a palindrome")

}
});



var arr=["code"];
var pali=arr.filter((ele)=>
{
if(ele.split("").reverse().join("")===ele){
console.log(arr)
}
else{
console.log("not a palindrome")

}
});


