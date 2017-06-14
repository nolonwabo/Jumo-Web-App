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

function totalSpend() {
    console.log(categoryAmounts);
}

function categoryPercentage() {
    var principleAmount = 1000;
    var expectedNeedPercentege = 60 % ;
    var expectedWantPercentege = 30 % ;
    var expectedLuxuryPercentege = 10 % ;

    var catagoryAmountsNeedVal = categoryAmounts.need;
    var catagoryAmountsWantVal = categoryAmounts.want;
    var catagoryAmountsLuxuryVal = categoryAmounts.luxury;


    if (catagoryAmountsNeedVal == true) {
        var percentageCalc = (catagoryAmountsNeedVal / principleAmount) * 100;
        if(percentageCalc >= expectedNeedPercentege ){

        }
    }
    if (catagoryAmountsWantVal == true) {
        var percentageCalc = (catagoryAmountsWantVal / principleAmount) * 100;
        if(percentageCalc <= expectedWantPercentege ){

        }
    }
    if (catagoryAmountsLuxuryVal == true) {
        var percentageCalc = (catagoryAmountsLuxuryVal / principleAmount) * 100;
        if(percentageCalc <= expectedLuxuryPercentege ){

        }
    }

}


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

container.addEventListener('click', function(evt) {
    var target = evt.target;

    manageSpendingCategory(target, 'need');
    manageSpendingCategory(target, 'want');
    manageSpendingCategory(target, 'luxury');

    totalSpend();
    target.classList.toggle('selected');
});
var purchaseBtn = document.querySelector('#purchaseBtn');

purchaseBtn.addEventListener("click", function() {

    alert(taskId)
    for (var i = 0; i < itemList.length; i++) {
        var catagoryList = itemList[i];

        if (Catergory.taskId === true) {

        }
        if (Catergory === luxury && itemList.Price <= 100) {
            itemList.totalBudget - itemList.Price;

        }
    }
});


// function openNav() {
//     document.getElementById("myNav").style.height = "100%";
// }
// function closeNav() {
//     document.getElementById("myNav").style.height = "0%";
// }
