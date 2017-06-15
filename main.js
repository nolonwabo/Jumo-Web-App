var container = document.querySelector('.container');

function isSelected(target, category) {
    return target.classList.contains(category) && target.classList.contains('selected')
}

function notSelected(target, category) {
    return target.classList.contains(category) && !target.classList.contains('selected')
}

var categoriesSelectedCount = {
    'need': 0,
    'want': 0,
    'luxury': 0
};

var categoryAmounts = {
    'need': 0,
    'want': 0,
    'luxury': 0
};

// function totalSpend() {
//     console.log(categoryAmounts);
// }

function categoryPercentage(catagoryAmountsNeedVal,catagoryAmountsWantVal,catagoryAmountsLuxuryVal) {
    var principleAmount = 1000;

    function needPercentageCalcVal(){
      var percentageCalc = 0;
    if (catagoryAmountsNeedVal > 0) {
      percentageCalc = (catagoryAmountsNeedVal / principleAmount) * 100;
    }

      return percentageCalc;
    };
    function wantPercentageCalcVal(){
        var percentageCalc = 0;
    if (catagoryAmountsWantVal > 0) {
       percentageCalc = (catagoryAmountsWantVal / principleAmount) * 100;
        }

        return percentageCalc;
    };
    function luxuryPercentageCalcVal(){
      var percentageCalc = 0;
    if (catagoryAmountsLuxuryVal > 0) {
       percentageCalc = (catagoryAmountsLuxuryVal / principleAmount) * 100;

        }
       return percentageCalc;
    };

    return   {
      needPercentageCalcVal,
      wantPercentageCalcVal,
      luxuryPercentageCalcVal
    };
};


//if the element have the selected category already we are going to remove it so the counter for that category needs to go down
//otherwise this is a newly selected category and the counter needs to go up

function manageSpendingCategory(target, category) {

    var categoryPrice = Number(target.dataset.categoryPrice);

    if (isSelected(target, category)) {
        //luxury down
        categoriesSelectedCount[category]--;
        categoryAmounts[category] -= categoryPrice;

    } else if (notSelected(target, category)) {
        //luxury up
        categoriesSelectedCount[category]++;
        categoryAmounts[category] += categoryPrice;

}
};

container.addEventListener('click', function(evt) {
    var target = evt.target;

    manageSpendingCategory(target, 'need');
    manageSpendingCategory(target, 'want');
    manageSpendingCategory(target, 'luxury');

    // totalSpend();
    target.classList.toggle('selected');
});
var purchaseBtn = document.querySelector('#purchaseBtn');

purchaseBtn.addEventListener("click", function(e) {
 //categoryPercentage()
  e.preventDefault();
var needPercent = categoryPercentage(categoryAmounts.need,categoryAmounts.want,categoryAmounts.luxury).needPercentageCalcVal();
console.log(needPercent);
var wantPercent = categoryPercentage(categoryAmounts.need,categoryAmounts.want,categoryAmounts.luxury).wantPercentageCalcVal();
console.log(wantPercent);
var luxuryPercent = categoryPercentage(categoryAmounts.need,categoryAmounts.want,categoryAmounts.luxury).luxuryPercentageCalcVal();
console.log(luxuryPercent);


if (categoryAmounts.need ===0 && categoryAmounts.want === 0 && categoryAmounts.luxury === 0) {
alert("Please select items first");
return;
}
if (needPercent > wantPercent && needPercent > luxuryPercent){

  window.location = "happy.html"
}
else{
  window.location = "sad.html"
}
});

function nextPage(){
        window.location = "index.html"
}
