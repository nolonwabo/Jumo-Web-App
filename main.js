

var container = document.querySelector('.container');

//var template = document.querySelector('.myTemplate').innerHTML;
//var myTemp = Handlebars.compile(template);


function isSelected(target, category){
  return target.classList.contains(category) && target.classList.contains('selected')
}

function notSelected(target, category){
  return target.classList.contains(category) && !target.classList.contains('selected')
}

var amount = 0;

container.addEventListener('click', function(evt){
  var target = evt.target;

  if (isSelected(target, 'luxury')){
      //luxury down
      amount--;

  }
  else if (notSelected(target, 'luxury')) {
      //luxury up
      amount++;
  }

//  if (isSelected (target, 'need')){
//  amount--;
//  }

  //else if (notSelected(target, 'need')) {
      //luxury up
    //  amount++;
//  }
//  if (isSelected(target, 'want')){
  //  amount--;
  //}
  //else if (notSelected(target, 'want'))


  //if the element have the selected category already we are going to remove it so the counter for that category needs to go down

  //otherwise this is a newly selected category and the counter needs to go up


  target.classList.toggle('selected');
// var template = document.querySelector('.myTemplate').innerHTML;
// var myTemp = Handlebars.compile(template);
var taskId = 0;

var itemList = [{
      totalBudget: "1000",
      taskId: 01,
      Price: "150",
      Catergory:"need"
    },
    totalBudget: "1000",
    taskId: 02,
    Price: "50",
    Catergory: "need",
  },
  totalBudget: "1000",
taskId: 03,
  Price: "45",
  Catergory: "need"
}
// totalBudget: "1000",
// IconPicture: "earings",
//   Price: "120",
//   Catergory: "want"
// },
// totalBudget: "1000",
// IconPicture: "handbag",
//   Price: "300",
//   Catergory: "want"
// },
// totalBudget: "1000",
// IconPicture: "clothes",
//   Price: "500",
//   Catergory: "want"
// },
// totalBudget: "1000",
// IconPicture: "shirt",
//   Price: "300",
//   Catergory: "want"
// },
// totalBudget: "1000",
// IconPicture: "hawaiin",
//   Price: "250",
//   Catergory: "want"
// },
// totalBudget: "1000",
// IconPicture: "smartphone",
//   Price: "3500",
//   Catergory: "luxury"
// },
// totalBudget: "1000",
// IconPicture: "broccoli",
//   Price: "120",
//   Catergory: "need"
// },
// totalBudget: "1000",
// IconPicture: "salad",
//   Price: "150",
//   Catergory: "want"
// },
// totalBudget: "1000",
// IconPicture: "apple",
//   Price: "45",
//   Catergory:"need"
];
var purchaseBtn = document.querySelector('#purchaseBtn')

purchaseBtn.addEventListener("click", function() {
  for (var i = 0; i < itemList.length; i++) {
    var catagoryList = itemList[i];

if(Catergory === luxury && Price <= 100){

}

 if (Catergory === luxury && itemList.Price <= 100) {

  }
}

})

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
