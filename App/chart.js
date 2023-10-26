const ctx = document.getElementById('myChart');

  let chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Total Money', ' Total Withdraw', 'Total Deposit',],
      datasets: [{
        label: '# of money',
        data: [1, 1, 1,],
        borderWidth: 1
      }]
    },
    options: {
      // scales: {
      //   y: {
      //     beginAtZero: true
      //   }
      // }
    }
  });

  const balance = document.getElementById("depositBtn");

  const charDisplay= () =>{
    const update=document.getElementById("userTotalBalance").innerHTML;
    chart.data.datasets[0].data[0]=update;
    chart.update();
  }
  balance.addEventListener('click', charDisplay)

  const withdraw = document.getElementById("withdrawBtn");

  const charDisplayOne= () =>{
    const updateWithdraw=document.getElementById("totalWithdrawAmount").innerHTML;
    chart.data.datasets[0].data[1]=updateWithdraw;
    chart.update();
    charDisplay;
  }
  withdraw.addEventListener('click', charDisplayOne)

  const charDisplaytwo= () =>{
    const updateDeposit=document.getElementById("totalDepositAmount").innerHTML;
    chart.data.datasets[0].data[2]=updateDeposit;
    chart.update();
    
  }
  deposit.addEventListener('click', charDisplaytwo)