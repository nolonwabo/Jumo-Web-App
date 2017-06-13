
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

function submitButton() {
  for (var i = 0; i < itemList.length; i++) {
    var catagoryList = itemList[i];
  }
if(Catergory === Luxury && Price <= 100){

}
}
