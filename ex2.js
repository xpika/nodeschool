
i=2;

sum = 0;
while(process.argv[i]){
  //sum += +process.argv[i];
  sum += parseInt(process.argv[i], 10)
  i++;
}
console.log(sum);


