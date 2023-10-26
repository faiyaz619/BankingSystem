const withdrawBtn = document.getElementById("withdrawBtn");

const withdrawAmount =()=>{
    
// total balance
  var totalAmount=parseFloat(document.getElementById("userTotalBalance").innerText);
 // total balance 
  const userWithdrawAmount=parseFloat(document.getElementById("userWithdraw").value);

  if(document.getElementById("userWithdraw").value == NaN || document.getElementById("userWithdraw").value == "" || document.getElementById("userWithdraw").value  == null)
{
    alert("You don't have enter an amount to withdraw");
}else{
  if(userWithdrawAmount>totalAmount ){
    alert("You don't have enough money to withdraw");
   }else{
       
       const withdrawAmount=parseFloat(document.getElementById("totalWithdrawAmount").innerText);
       const updateWithdrawAmount=withdrawAmount+userWithdrawAmount;
       document.getElementById("totalWithdrawAmount").innerText=updateWithdrawAmount;
       document.getElementById("lastWithdrawAmount").innerText=userWithdrawAmount;
   
       const newTotalAmount=totalAmount-userWithdrawAmount;
       document.getElementById("userTotalBalance").innerText=newTotalAmount;
       document.getElementById("userWithdraw").value=" ";
   } 
   }
  }
  


withdrawBtn.addEventListener("click",withdrawAmount );