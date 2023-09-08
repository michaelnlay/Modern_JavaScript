//  console.log(10<20 && 30>15 && 40>30);
//  console.log(10>20 || 30 <15);

 // && - will return first falsy value or the last value 
 let a;

 a = 10 && 20; // none of them is falsy so return 20
 a = 10 && 20 &&30; // return 30
 a = 10 && 0 && 30; 
 a = 10 && ' ' && 0 && 30; //false

//  console.log(a);
  
 // || - will return the first truthy value or the last value
 let b;
 b = 10 || 20; //return 10
b = 0 || 20; // return 20
b =0 || '' || undefined || null; // return null



 console.log(b);

 // ?? - Nullish coalescing operator - return the right side operator when the left is null or underfined

 let c;
 c = 10 ?? 20; // return 10
 c = null ?? 20; // return 20

 console.log(c);