var total = 0;
for (i=2; i<process.argv.length; i++) {
   // hacer algo con a[i];
   total+= +process.argv[i]
}
console.log(total)
