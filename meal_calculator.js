// This should not be a full fledged app. Focus on creating the objects that represent the pieces of the app, and add dummy data to show how they interact.

// Project specification
// For your finished project you should have:

// A diner object with:
// Name
// list of dishes (what they ate, and how much it cost)
// A method to add the total of the dishes
// A method to calculate tax for this diner
// A method to calculate the tip for this diner
// A bill object with:
// list of diners
// method to total and print the total of all diners, including tax
// method to total and print diners tips
// method to print a breakdown for each diner including their name, total, tax and tip
// Dummy data that creates:
// 1 bill
// 3 diners that are on the same bill
// 2 dishes for each diner
// Print the total for the bill
// Print the total tip for the waitress
// Print a breakdown for each person

//setting the Diner function to recognize diner and food they ate
var Diner = function(name, dish){
	this.name = name;
	this.dishes = [];
	//setting addDish to be added as diners eat more dishes
	this.addDish = function(dish){
		this.dishes.push(dish);
	};
};


//setting the Dish function to include meal name and price
var Dish = function(name, price){
	this.name = name;
	this.price = price;
};

//setting the Bill fxn to include diners, dishes, totals, tips
var Bill = function (){
	this.diners = [];
	this.tax = 0.085;
	this.tip = 0.20;
	this.subtotal = 0;
	this.total = 0;
	//setting the Bill method to add diners to bill as needed
	this.addDiner = function(diner){
		this.diners.push(diner);
	};
	this.calculateTotal = function(){
		for(var i = 0; i<this.diners.length; i++){
			var dinerDishPrices = 0;
			for(var j = 0; j<this.diners[i].dishes.length; j++){
				this.subtotal += this.diners[i].dishes[j].price;
				//console.log(this.subtotal);
				dinerDishPrices += this.diners[i].dishes[j].price;
				console.log(dinerDishPrices);
				//console.log(diners[i]name,'ate: ',this.diners[i].dishes); *trying to get 'Dinah ate spaghetti'
			}
			//console.log('Diner',this.diners[i].name,':',dinerTotal);
		}
	var tax = this.tax * this.subtotal;
	var tip = this.tip * this.subtotal;
	this.total = this.subtotal + tax + tip;
	};
};

//invoke a new bill
var bill = new Bill();

//setting the diners
var dinah = new Diner ('Dinah');
var dino = new Diner ('Dino');
var mario = new Diner ('Mario');

//setting the dishes and prices
var dish1 = new Dish('spaghetti', 10.50);
var dish2 = new Dish('lasagna', 12.75);
var dish3 = new Dish('stuffed shells', 10.00);
var dish4 = new Dish('caeser salad', 5.75);
var dish5 = new Dish('breadsticks', 3.50);

//adding dishes to array in Diner object
dinah.addDish(dish2);
dinah.addDish(dish4);

dino.addDish(dish1);
dino.addDish(dish5);

mario.addDish(dish3);
mario.addDish(dish4);

//adding diners to the diners array of the Bill object
bill.addDiner(dinah);
bill.addDiner(dino);
bill.addDiner(mario);

//running calculateTotal method of bill function to get total money owed
bill.calculateTotal();

//seeing total money spent to 2 decimal places
console.log('Total $:' + bill.total.toFixed(2));
























 



// /*project specification





// For your finished project you should have:*/

// //A diner object with:
// //Name
// var dishes = {
//   spaghetti: 10.50,
//   lasagna: 12.75,
//   'stuffed shells': 10.00,
//   'caesar salad': 5.75,
//   breadsticks: 3.50
//   };


//  var diners = [{
//  	one: 'Dinah',
//  	ate: ['lasagna','caesar salad']
//  }, {
//  	two: 'Dino',
//  	ate: ['spaghetti','breadsticks']
//  }, {
//  	three: 'Mario',
//  	ate: ['stuffed shells','caesar salad']
//  }];
//  var total = 0;
//  diners.forEach(function(diner){
//  	diner.ate.forEach(function(dish){
//  		total += dishes[dish];
//  	});
//  });
//  console.log('subtotal:',total);
//  total += (total * 0.06) + (total * 0.20);
//  console.log('total:',total);
// //  function prepareBill(tax,tip){
// //     // enclosed = closure
// //     var tax = tax;
// //     var tip = tip;
// //     return function(subtotal){ 
// //         return (subtotal * tax) + (subtotal * tip) + subtotal;
// //     }
// // }

// // var table1 = prepareBill(0.06,0.20);
// // var table2 = prepareBill(0.06,0.15);

// // console.log(table2(25.00));
// // console.log(table1(25.00));
//  // var total = {
//  //  	return (subtotal * tax) + (subtotal * tip) + subtotal;
//  //  };
//  // var tax = {
//  //  	return (subtotal * '.095');
//  //  };
//  // var tip = {
//  //  	return (subtotal * '.20');
//  //  };




// /*
// A method to add the total of the dishes
// A method to calculate tax for this diner
// A method to calculate the tip for this diner
// A bill object with:
// list of diners
// method to total and print the total of all diners, including tax
// method to total and print diners tips
// method to print a breakdown for each diner including their name, total, tax and tip
// Dummy data that creates:
// 1 bill
// 3 diners that are on the same bill
// 2 dishes for each diner
// Print the total for the bill
// Print the total tip for the waitress
// Print a breakdown for each person*/

