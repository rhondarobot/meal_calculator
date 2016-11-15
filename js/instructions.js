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
	var addDish = function(dish){
		this.dishes.push(dish);
	};
};
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
	var addDiner = function(diner){
		this.diners.push(diner);
	};
	var calculateTotal = function(){
		for(var i = 0; i<this.diners.length; i++){
			for(var j = 0; j<this.diners[i].dishes.length; j++){
				this.subtotal += this.diners[i].dishes[j].price;
			}
		}
	var tax = this.tax * this.subtotal;
	var tip = this.tip + this.subtotal;
	this.total = this.subtotal + tax + tip;
	};
};

//invoke a new bill
var bill = new Bill();

//adding dishes to array in Diner object
/*can we add more than 1 dish at once?*/
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
console.log('Total $:'+meal.total.toFixed(2));























 