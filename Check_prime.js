function check_prime(num){
 
  if(num<=1){
	return "false";
  }
  for(let i=2;i<=num**0.5;i++){
	if(num%i==0){
	  return "false";
	}
  }
  return "true";
}
let number=13;
let result=check_prime(number);
if(result=="true"){
  console.log(number, "is a prime number");
}
else{
  console.log(number, "is not a prime number");
}