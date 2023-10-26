const depositBtn = document.getElementById("depositBtn");

const depositAmount =()=>{
  const userDepositAmount=parseFloat(document.getElementById("userDeposit").value);

  if(document.getElementById("userDeposit").value == NaN || document.getElementById("userDeposit").value == "" || document.getElementById("userDeposit").value  == null)
{
    alert("You don't have enter an amount to withdraw");
}else{
  const depositAmount=parseFloat(document.getElementById("totalDepositAmount").innerText);

  const updateDepositAmount=depositAmount+userDepositAmount;

  document.getElementById("totalDepositAmount").innerText=updateDepositAmount;

  document.getElementById("lastDepositAmount").innerText=userDepositAmount;

  var totalAmount=parseFloat(document.getElementById("userTotalBalance").innerText)
   const newTotalAmount=totalAmount+userDepositAmount;
   document.getElementById("userTotalBalance").innerText=newTotalAmount;
   
   document.getElementById("userDeposit").value=" ";
}
  
}



depositBtn.addEventListener("click",depositAmount );