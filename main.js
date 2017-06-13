

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

  if (isSelected (target, 'need'){
  amount--;
  }
  else if (notSelected(target, 'need')) {
      //luxury up
      amount++;
  }


  //if the element have the selected category already we are going to remove it so the counter for that category needs to go down

  //otherwise this is a newly selected category and the counter needs to go up


  target.classList.toggle('selected');


  //luxury
  //want
  //need

})




// var itemList = [{
//       totalBudget: "1000";
//       IconPicture: Price: Catergory:
//     },
//     totalBudget: "1000";
//     IconPicture:
//     Price:
//     Catergory:
//   },
//   totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// },
// totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// },
// totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// },
// totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// },
// totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// },
// totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// },
// totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// },
// totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// },
// totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// },
// totalBudget: "1000";
// IconPicture:
//   Price:
//   Catergory:
// }];

// var template = document.querySelector('.myTemplate').innerHTML;
// var myTemp = Handlebars.compile(template);
//
// var itemList = [{
//       totalBudget: "1000",
//       IconPicture: "fish",
//       Price: "150",
//       Catergory:"Need"
//     },
//     totalBudget: "1000",
//     IconPicture: "cereals",
//     Price: "50",
//     Catergory: "Need",
//   },
//   totalBudget: "1000",
// IconPicture: "cheese",
//   Price: "45",
//   Catergory: "Need"
// },
// totalBudget: "1000",
// IconPicture: "earings",
//   Price: "120",
//   Catergory: "Want"
// },
// totalBudget: "1000",
// IconPicture: "handbag",
//   Price: "300",
//   Catergory: "Want"
// },
// totalBudget: "1000",
// IconPicture: "clothes",
//   Price: "1000",
//   Catergory: "Want"
// },
// totalBudget: "1000",
// IconPicture: "shirt",
//   Price: "300",
//   Catergory: "Want"
// },
// totalBudget: "1000",
// IconPicture: "hawaiin",
//   Price: "250",
//   Catergory: "Want"
// },
// totalBudget: "1000",
// IconPicture: "smartphone",
//   Price: "3500",
//   Catergory: "Luxury"
// },
// totalBudget: "1000",
// IconPicture: "broccoli",
//   Price: "120",
//   Catergory: "Need"
// },
// totalBudget: "1000",
// IconPicture: "salad",
//   Price: "150",
//   Catergory: "Want"
// },
// totalBudget: "1000",
// IconPicture: "apple",
//   Price: "45",
//   Catergory:"Need"
// }];


//function submitButton() {
  //for (var i = 0; i < itemList.length; i++) {
  //  var catagoryList = itemList[i];
  //}

//if(Catergory === Luxury && Price <= 100){

//}

//  if (Catergory === Luxury && itemList.Price <= 100) {

  //}

//}
