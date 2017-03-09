var products = [
  {
    "name": "Reversible Plaid",
    "price": 26.99,
    "description": "Two classic patterns in one great look: This supersoft and cozy reversible scarf instantly doubles your street-style cred. 100% acrylic.",
    "imageTitle": "reversible-plaid.jpg"
  },
  {
    "name": "Wool Cable Knit",
    "price": 49.99,
    "description": "Warm yourself with this women's natural cable knit scarf, crafted from 100% Merino wool. Imported.",
    "imageTitle": "wool-cable.jpeg"
  },
  {
    "name": "Northern Lights",
    "price": 29.99,
    "description": "Handmade by women in Agra, sales provide medical and educational support in this remote area of India. Crinkly 100% cotton.",
    "imageTitle": "northern-lights.jpg"
  },
  {
    "name": "Ombre Infinity",
    "price": 11.99,
    "description": "A dip-dye effect adds color and dimension to a cozy infinity scarf featuring a soft, chunky knit. 100% acrylic.",
    "imageTitle": "ombre-infinity.jpg"
  },
  {
    "name": "Fringed Plaid",
    "price": 18.99,
    "description": "Generously sized, extra soft and featuring a dazzling fringe, this scarf is rendered in a versatile gray, black and white plaid. Expertly beat the cold with style. 100% acrylic.",
    "imageTitle": "fringed-plaid.jpeg"
  },
  {
    "name": "Multi Color",
    "price": 22.99,
    "description": "The Who What Wear Oversize Color-Block Square Scarf is big, bold, and designed to twist and wrap any way you wish. All the colors of the season are harmonized in this oversize accent, so you can adjust to contrast or match your outfit; soft and lush, it’s your stylish standoff against cold AC and unexpected fall breezes. 100% acrylic",
    "imageTitle": "multi-color.jpeg"
  },
  {
    "name": "Etro Paisley-Print Silk",
    "price": 249.99,
    "description": "Luxurious silk scarf with subtle paisley pattern. 100% silk",
    "imageTitle": "etro.jpg"
  },
  {
    "name": "Ashby Twill",
    "price": 70.99,
    "description": "Faribault brings you the Ashby Twill Scarf in Natural. Woven with a 'broken' twill technique, the Ashby Twill Scarf has a slight zigzag texture. Made in USA, this timeless scarf is crafted with luxurious merino wool and finished with heather gray fringe. 100% Merino wool",
    "imageTitle": "twill.jpg"
  }
];

var cart=[];

function cartChange(name){

  var index = cart.indexOf(name);

  if (index >= 0) {
    cart.splice(index, 1);
    alert('item has been removed from cart!');
  } else {
    cart.push(name);
    alert('item has been added to cart!');
  }
   console.log(cart);
   event.preventDefault();
};

function priceComp(a, b){
  return (a.price - b.price);
};
function nameComp(a, b){
  return (a.name > b.name);
};

function capture() {
  
  var filter = document.getElementById("filter");
  var selection = filter.options[filter.selectedIndex].value;
  
  if(selection=="price"){
    products.sort(priceComp);
  }
  else if (selection=="name") {
    products.sort(nameComp);
 }
  console.log(products);
  event.preventDefault();
};


//function sumPrices(cartArray){
//  
//  var total=0;
//  //TO DO: trigger on change of cart contents  
//  for(var i=0; i < cartArray.length; i++){
//    console.log(cartArray[i].price);
//    
//    total = total + cartArray[i].price;
//  };
//  //TO DO: print total as HTML to page, next to cart icon
//  console.log(total);
//  
//}

