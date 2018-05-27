class locaion {
	constructor(public Name, public ZipCode, public Adress, public Image, public Telephone){
	}

}


class place extends locaion {

	constructor(Name, ZipCode, Adress, Image, type){
		super(Name, ZipCode, Adress, Image);
		this.type = "place";
	}
}	



class events extends locaion {

	constructor(Name, ZipCode, Adress, Image, type){
		super(Name, ZipCode, Adress, Image);
		this.type ="events";
	}
}


class reataurant extends locaion {

	constructor(Name, ZipCode, Adress, Image, type){
		super(Name, ZipCode, Adress, Image);
		this.type ="reataurant";
	}	
}

let place1 = new place("St. Charles Church", "Vienna 1010", "Karlsplatz 1", "Image")
let place2 = new place("Vienna Zoo", "Vienna 1130", "Maxingstraße 13b", "Image")
let reataurant1 = new reataurant("Lemon Leaf", "Vienna 1050" ,"Kettenbrückengasse 19", "image", "+43(1)5812308", "Thai Restaurant" , "www.lemonleaf.at")
let reataurant2 = new reataurant("SIXTA", "Vienna 1050", "Schönbrunner Straße 21", "image", "+43 1 58 528 56 | +43 1 58 528 56" , "wienerisch", "www.sixta-restaurant.at")
let events1 = new events("Kris Kristofferson" ,"Vienna 1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1" , "image", "Fr., 15. Jun." , "20:00", "58,50 EUR")
let events2 = new events("Lenny Kravitz", "Vienna1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "image", "Sat, 09.06.2018", "19:30", "€ 47,80")

let locaion_data= []
	locaion_data.push(place1, place2, reataurant1, reataurant2, events1, events2);


function createDOM (){
	for (i=0;i<locaion_data.length;i++){
 	dummy = document.createElement("div");
 	dummy.classList.add("card");
 	dummy.classList.add("col-lg-4");
 	dummy.classList.add("col-md-6");
 	dummy.classList.add("col-sm-12");
 	var row = document.getElementById("row4");
 	row.appendChild(dummy);
 	var headline = document.createElement("h4");
 	var headline_text = document.createTextNode(locaion_data[i].Name);
 	headline.appendChild(headline_text);
 	dummy.appendChild(headline);
 	var Adress = document.createElement("p");
 	var Adress_text = document.createTextNode(locaion_data[i].Adress);
 	Adress.appendChild(Adress_text);
 	dummy.appendChild(Adress);
 	var ZipCode = document.createElement("p");
 	var ZipCode_text = document.createTextNode(locaion_data[i].ZipCode);
 	ZipCode.appendChild(ZipCode_text);
 	dummy.appendChild(ZipCode);
 	var Image = document.createElement("p");
 	var Image_text = document.createTextNode(locaion_data[i].Image);
 	Image.appendChild(Image_text);
 	dummy.appendChild(Image);

	}
}



// createDOM();


function createTabs (arr, x){
	for (i=0;i<arr.length;i++){
	dummy = document.createElement("div");
 	dummy.classList.add("card");
 	dummy.classList.add("col-lg-4");
 	dummy.classList.add("col-md-6");
 	dummy.classList.add("col-sm-12");
 	var row = document.getElementById(`row${x}`);
 	row.appendChild(dummy);
 	var headline = document.createElement("h4");
 	var headline_text = document.createTextNode(arr[i].Name);
 	headline.appendChild(headline_text);
 	dummy.appendChild(headline);
 	var Adress = document.createElement("p");
 	var Adress_text = document.createTextNode(arr[i].Adress);
 	Adress.appendChild(Adress_text);
 	dummy.appendChild(Adress);
 	var ZipCode = document.createElement("p");
 	var ZipCode_text = document.createTextNode(arr[i].ZipCode);
 	ZipCode.appendChild(ZipCode_text);
 	dummy.appendChild(ZipCode);
 	var Image = document.createElement("p");
 	var Image_text = document.createTextNode(arr[i].Image);
 	Image.appendChild(Image_text);
 	dummy.appendChild(Image);
 		

	}
}

var place_data = locaion_data.filter(x=>x.type=="place")
var reataurant_data = locaion_data.filter(x=>x.type=="reataurant")
var events_data = locaion_data.filter(x=>x.type=="events")

createTabs(reataurant_data, 0); 
createTabs(place_data, 1);
createTabs(events_data, 2);


