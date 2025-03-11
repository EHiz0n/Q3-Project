 function calculateFare() {
    var start = document.getElementById("start").value;
    var end = document.getElementById("end").value;

    if (!start || !end) {
        document.getElementById("fare-result").innerHTML = "<span style='color: red;'>Please select both stations.</span>";
        return;
    }

    var stations = {
        "Baclaran": ["LRT-1", 1], "EDSA": ["LRT-1", 2], "Central Terminal": ["LRT-1", 3], "Doroteo Jose": ["LRT-1", 4], 
        "Monumento": ["LRT-1", 5], "Roosevelt": ["LRT-1", 6], "Recto": ["LRT-2", 7], "Araneta Center-Cubao": ["LRT-2", 8], 
        "Santolan": ["LRT-2", 9], "North Avenue": ["MRT-3", 10], "Ayala": ["MRT-3", 11], "Shaw Boulevard": ["MRT-3", 12], 
        "Taft Avenue": ["MRT-3", 13]
    };

    var startLine = stations[start][0], startIndex = stations[start][1];
    var endLine = stations[end][0], endIndex = stations[end][1];

    if (startLine !== endLine) {
        document.getElementById("fare-result").innerHTML = "<span style='color: red;'>Cross-line calculation not supported.</span>";
        return;
    }

    var baseFare = startLine === "MRT-3" ? 15 : startLine === "LRT-1" ? 20 : 25;
    var fare = baseFare + (endIndex - startIndex);
    
    if (fare > 28) fare = 28;

    document.getElementById("fare-result").innerHTML = "<strong>Total Fare: ₱" + fare + "</strong>";
}

     function calculateDiscountedFare() {
    var fare = prompt("Enter ticket fare price:") || "0";
    fare = fare * 1; 

    if (fare < 13 || fare > 28) {
        document.getElementById("fare-result").innerHTML = "<span style='color: red;'>Invalid fare. Please enter a fare between ₱13 and ₱28.</span>";
        return;
}

    var discountPercent = prompt("Enter discount (10 for PWD/Senior, 20 for Children):") || "0";
    var discount = (discountPercent * 1) / 100 * fare;
    var totalFare = fare - discount;

    document.getElementById("fare-result").innerHTML = "<strong>Discounted Fare: ₱" + totalFare + "</strong>";
}

    function mouseOver(){
      submit.style.color = "white";
      submit.style.background = "red";
                      }
    function mouseOut(){
      submit.style.color = "black";
      submit.style.background = "grey";
}
     document.getElementById("fname").onchange = function() {changeToCapital()};
    
    function changeToCapital(){
      var name = document.getElementById("fname");
      name.value = name.value.toUpperCase();
}