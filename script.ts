class location {
	constructor( public Name , public ZipCode ,public Address, public Image){

	};
};


class Place extends location{
	constructor(Name, ZipCode, Address, Image,sort){
		this.sort = "Place";
	};	
};



class Restaurant extends location {
	constructor(Name, ZipCode, Address, Image, Telephone, Type, Website, sort){
		super(Name, ZipCode, Address, Image);
		this.sort = "Restaurant"
		this.Telephone = "Telephone" ;
		this.Type = "Type" ;
		this.Website = "Website" ;


	};
};



class Event extends location {
	constructor(Name, ZipCode, Address, Image, Date, Time, TeckitPrice, sort ){
		super(Name, ZipCode, Address, Image);
		this.sort ="Event"
		this.Date = "Date";
		this.Time = "Time";
		this.TeckitPrice = "Teckit Price";
	};
};


let place1 = new Place("St. Charles Church", "Vienna 1010", "Karlsplatz 1", "src = img/Karlskirche.jpg" );
let place2 = new Place("Vienna Zoo", "Vienna 1130", "Maxingstraße 13b", "src = img/viennazoo.jpg");
let restaurant1 = new Restaurant ("Lemon Leaf", "Vienna 1050" ,"Kettenbrückengasse 19", "image", "+43(1)5812308", "Thai Restaurant" , "www.lemonleaf.at");
let restaurant2 = new Restaurant("SIXTA", "Vienna 1050", "Schönbrunner Straße 21", "image" "+43 1 58 528 56 | +43 1 58 528 56" , "wienerisch", "www.sixta-restaurant.at" );
let event1 = new Event("Kris Kristofferson" ,"Vienna 1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1" , "image", "Fr., 15. Jun." , "20:00", "58,50 EUR");
let event2 = new Event("Lenny Kravitz", "Vienna1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "image", "Sat, 09.06.2018", "19:30", "€ 47,80");
let data= []
    data.push(place1, place2, restaurant1, restaurant2, event1, event2);



function createDOM (){
	for (i=0;i<data.length;i++){
 	dummy = document.createElement("div");
 	dummy.classList.add("card");
 	dummy.classList.add("col-lg-3");
 	dummy.classList.add("col-md-6");
 	dummy.classList.add("col-sm-12");
 	var row = document.getElementById("row4");
 	row.appendChild(dummy);
 	var headline = document.createElement("h4");
 	var headline_text = document.createTextNode(data[i].Name);
 	headline.appendChild(headline_text);
 	dummy.appendChild(headline);
 	var name = document.createElement("p");
 	var name_text = document.createTextNode(data[i].ZipCode);
 	name.appendChild(name_text);
 	dummy.appendChild(name);
 	var address = document.createElement("p");
 	var address_text = document.createTextNode(data[i].Address);
 	address.appendChild(address_text);
 	dummy.appendChild(address);
 	var zipCode = document.createElement("p");
 	var zipCode_text = document.createTextNode(data[i].ZipCode);
 	zipCode.appendChild(zipCode_text);
 	dummy.appendChild(zipCode);
 	var image = document.createElement("p");
 	var image_text = document.createTextNode(data[i].Image);
 	image.appendChild(image_text);
 	dummy.appendChild(image);
 	var telephone = document.createElement("p");
 	var telephone_text = document.createTextNode(data[i].Telephone);
 	telephone.appendChild(telephone_text);
 	dummy.appendChild(telephone);
 	var type = document.createElement("p");
 	var type_text = document.createTextNode(data[i].Type);
 	type.appendChild(type_text);
 	dummy.appendChild(type);
 	var website = document.createElement("p");
 	var website_text = document.createTextNode(data[i].Website);
 	website.appendChild(website_text);
 	dummy.appendChild(website);
 	var date = document.createElement("p");
 	var date_text = document.createTextNode(data[i].Date);
 	date.appendChild(date_text);
 	dummy.appendChild(date);
 	var time = document.createElement("p");
 	var time_text = document.createTextNode(data[i].Time);
 	time.appendChild(time_text);
 	dummy.appendChild(time);
 	var teckitPrice = document.createElement("p");
 	var teckitPrice_text = document.createTextNode(data[i].TeckitPrice);
 	teckitPrice.appendChild(teckitPrice_text);
 	dummy.appendChild(teckitPrice);
	};
};


function createTabs (arr, x){
	for (i=0;i<arr.length;i++){
	dummy = document.createElement("div");
 	dummy.classList.add("card");
 	dummy.classList.add("col-lg-3");
 	dummy.classList.add("col-md-6");
 	dummy.classList.add("col-sm-12");
 	var row = document.getElementById(`row${x}`);
 	row.appendChild(dummy);
 	var headline = document.createElement("h4");
 	var headline_text = document.createTextNode(arr[i].Name);
 	headline.appendChild(headline_text);
 	dummy.appendChild(headline);
 	var address = document.createElement("p");
 	var address_text = document.createTextNode(arr[i].Address);
 	address.appendChild(address_text);
 	dummy.appendChild(address);
 	var zipCode = document.createElement("p");
 	var zipCode_text = document.createTextNode(arr[i].ZipCode);
 	zipCode.appendChild(zipCode_text);
 	dummy.appendChild(zipCode);
 	var image = document.createElement("p");
 	var image_text = document.createTextNode(arr[i].Image);
 	image.appendChild(image_text);
 	dummy.appendChild(image);
 	var telephone = document.createElement("p");
 	var telephone_text = document.createTextNode(arr[i].Telephone);
 	telephone.appendChild(telephone_text);
 	dummy.appendChild(telephone);
 	var type = document.createElement("p");
 	var type_text = document.createTextNode(arr[i].Type);
 	type.appendChild(type_text);
 	dummy.appendChild(type);
 	var website = document.createElement("p");
 	var website_text = document.createTextNode(arr[i].Website);
 	website.appendChild(website_text);
 	dummy.appendChild(website);
 	var date = document.createElement("p");
 	var date_text = document.createTextNode(arr[i].Date);
 	date.appendChild(date_text);
 	dummy.appendChild(date);
 	var time = document.createElement("p");
 	var time_text = document.createTextNode(arr[i].Time);
 	time.appendChild(time_text);
 	dummy.appendChild(time);
 	var teckitPrice = document.createElement("p");
 	var teckitPrice_text = document.createTextNode(arr[i].TeckitPrice);
 	teckitPrice.appendChild(teckitPrice_text);
 	dummy.appendChild(teckitPrice);

	};
};

var place_data = data.filter(x=>x.sort=="Place");
var restaurant_data = data.filter(x=>x.sort=="Restaurant");
var event_data = data.filter(x=>x.sort=="Event");

createTabs(place_data, 0); 
createTabs(restaurant_data, 1);
createTabs(event_data, 2);
