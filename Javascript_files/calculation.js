function tierOnePrice(){
    var buttonOneValue = document.getElementById('btn1').value
    document.getElementById('priceDiv').innerText = "$" + buttonOneValue;
}

function tierTwoPrice(){
    var buttonTwoValue = document.getElementById('btn2').value 
    document.getElementById('priceDiv').innerText = "$" + buttonTwoValue;
}

function tierThreePrice(){
    var buttonThreeValue = document.getElementById('btn3').value 
    document.getElementById('priceDiv').innerText = "$" + buttonThreeValue;
}

function configurationSum(){
    var a = document.getElementById("cpu");
    var cpuValue = parseInt(a.options[a.selectedIndex].value);

    var b = document.getElementById("memory");
    var memoryValue = parseInt(b.options[b.selectedIndex].value);

    var c = document.getElementById("diskspace");
    var diskValue = parseInt(c.options[c.selectedIndex].value);

    var totalPrice = cpuValue + memoryValue + diskValue;
    var totalPriceText = totalPrice.toString();

    document.getElementById("priceDiv").innerText = "$" + totalPriceText;
}