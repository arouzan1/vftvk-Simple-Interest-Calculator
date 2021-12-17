function compute()
{
    p = document.getElementById("principal").value;
    x = document.getElementById("rateRange").value;
    y = document.getElementById("years").value;
    z = p*x*y
    yr = getYear() - 100 + 2000
    print("If you deposit "+p+", \n at an interest rate of "+x+"%.\n You will receive an amount of "+z+", \n in the year " + (yr + y)) 
}
        
