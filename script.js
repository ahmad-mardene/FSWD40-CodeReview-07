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
var locaion = /** @class */ (function () {
    function locaion(Name, ZipCode, Adress, Image, Telephone) {
        this.Name = Name;
        this.ZipCode = ZipCode;
        this.Adress = Adress;
        this.Image = Image;
        this.Telephone = Telephone;
    }
    return locaion;
}());
var place = /** @class */ (function (_super) {
    __extends(place, _super);
    function place(Name, ZipCode, Adress, Image, type) {
        var _this = _super.call(this, Name, ZipCode, Adress, Image) || this;
        _this.type = "place";
        return _this;
    }
    return place;
}(locaion));
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(Name, ZipCode, Adress, Image, type) {
        var _this = _super.call(this, Name, ZipCode, Adress, Image) || this;
        _this.type = "events";
        return _this;
    }
    return events;
}(locaion));
var reataurant = /** @class */ (function (_super) {
    __extends(reataurant, _super);
    function reataurant(Name, ZipCode, Adress, Image, type) {
        var _this = _super.call(this, Name, ZipCode, Adress, Image) || this;
        _this.type = "reataurant";
        return _this;
    }
    return reataurant;
}(locaion));
var place1 = new place("St. Charles Church", "Vienna 1010", "Karlsplatz 1", "Image");
var place2 = new place("Vienna Zoo", "Vienna 1130", "Maxingstraße 13b", "Image");
var reataurant1 = new reataurant("Lemon Leaf", "Vienna 1050", "Kettenbrückengasse 19", "image", "+43(1)5812308", "Thai Restaurant", "www.lemonleaf.at");
var reataurant2 = new reataurant("SIXTA", "Vienna 1050", "Schönbrunner Straße 21", "image", "+43 1 58 528 56 | +43 1 58 528 56", "wienerisch", "www.sixta-restaurant.at");
var events1 = new events("Kris Kristofferson", "Vienna 1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "image", "Fr., 15. Jun.", "20:00", "58,50 EUR");
var events2 = new events("Lenny Kravitz", "Vienna1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "image", "Sat, 09.06.2018", "19:30", "€ 47,80");
var locaion_data = [];
locaion_data.push(place1, place2, reataurant1, reataurant2, events1, events2);
function createDOM() {
    for (i = 0; i < locaion_data.length; i++) {
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
function createTabs(arr, x) {
    for (i = 0; i < arr.length; i++) {
        dummy = document.createElement("div");
        dummy.classList.add("card");
        dummy.classList.add("col-lg-4");
        dummy.classList.add("col-md-6");
        dummy.classList.add("col-sm-12");
        var row = document.getElementById("row" + x);
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
var place_data = locaion_data.filter(function (x) { return x.type == "place"; });
var reataurant_data = locaion_data.filter(function (x) { return x.type == "reataurant"; });
var events_data = locaion_data.filter(function (x) { return x.type == "events"; });
createTabs(reataurant_data, 0);
createTabs(place_data, 1);
createTabs(events_data, 2);
