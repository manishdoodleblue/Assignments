n = 7;
count=0;
for(i=1;i<=n;i++)
{
    if(n%i==0)
    count++;
}
if(count==2)
{
   console.log("prime");
}
else{
   console.log("not prime");
}