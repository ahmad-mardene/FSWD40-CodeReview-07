var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var location = /** @class */ (function () {
    function location(Name, ZipCode, Address, Image) {
        this.Name = Name;
        this.ZipCode = ZipCode;
        this.Address = Address;
        this.Image = Image;
    }
    ;
    return location;
}());
;
var Place = /** @class */ (function (_super) {
    __extends(Place, _super);
    function Place(Name, ZipCode, Address, Image, sort) {
        var _this = this;
        _this.sort = "Place";
        return _this;
    }
    ;
    return Place;
}(location));
;
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(Name, ZipCode, Address, Image, Telephone, Type, Website, sort) {
        var _this = _super.call(this, Name, ZipCode, Address, Image) || this;
        _this.sort = "Restaurant";
        _this.Telephone = "Telephone";
        _this.Type = "Type";
        _this.Website = "Website";
        return _this;
    }
    ;
    return Restaurant;
}(location));
;
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(Name, ZipCode, Address, Image, Date, Time, TeckitPrice, sort) {
        var _this = _super.call(this, Name, ZipCode, Address, Image) || this;
        _this.sort = "Event";
        _this.Date = "Date";
        _this.Time = "Time";
        _this.TeckitPrice = "Teckit Price";
        return _this;
    }
    ;
    return Event;
}(location));
;
var place1 = new Place("St. Charles Church", "Vienna 1010", "Karlsplatz 1", "src = img/Karlskirche.jpg");
var place2 = new Place("Vienna Zoo", "Vienna 1130", "Maxingstraße 13b", "src = img/viennazoo.jpg");
var restaurant1 = new Restaurant("Lemon Leaf", "Vienna 1050", "Kettenbrückengasse 19", "image", "+43(1)5812308", "Thai Restaurant", "www.lemonleaf.at");
var restaurant2 = new Restaurant("SIXTA", "Vienna 1050", "Schönbrunner Straße 21", "image", "+43 1 58 528 56 | +43 1 58 528 56", "wienerisch", "www.sixta-restaurant.at");
var event1 = new Event("Kris Kristofferson", "Vienna 1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "image", "Fr., 15. Jun.", "20:00", "58,50 EUR");
var event2 = new Event("Lenny Kravitz", "Vienna1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "image", "Sat, 09.06.2018", "19:30", "€ 47,80");
var data = [];
data.push(place1, place2, restaurant1, restaurant2, event1, event2);
function createDOM() {
    for (i = 0; i < data.length; i++) {
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
    }
    ;
}
;
function createTabs(arr, x) {
    for (i = 0; i < arr.length; i++) {
        dummy = document.createElement("div");
        dummy.classList.add("card");
        dummy.classList.add("col-lg-3");
        dummy.classList.add("col-md-6");
        dummy.classList.add("col-sm-12");
        var row = document.getElementById("row" + x);
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
    }
    ;
}
;
var place_data = data.filter(function (x) { return x.sort == "Place"; });
var restaurant_data = data.filter(function (x) { return x.sort == "Restaurant"; });
var event_data = data.filter(function (x) { return x.sort == "Event"; });
createTabs(place_data, 0);
createTabs(restaurant_data, 1);
createTabs(event_data, 2);
