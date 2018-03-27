var pic = document.getElementById("pic");
var switchButt = document.getElementById("switchYear");
var year = 2018;

var deptList = ["Agriculture", "Commerce", "Defense", "Education", "Energy", "Health", "Homeland Security", "HUD", "Interior", "Justice", "Labor", "State", "Transportation", "Treasury", "VA"];
var spending2021 = [123, 10.7, 473, 77.9, 27.3, 1120, 33.5, 31, 13.9, 29.5, 45.6, 20.1, 94.2, 792, 169];
var spending2018 = [132, 9.56, 491, 65.5, 26.1, 1010, 38.1, 34.7, 13.2, 31.1, 46.6, 23.2, 81.2, 627, 154];

var chart = d3.select(".chart");
var bar = chart.selectAll("div");
var barUpdate = bar.data(spending2018);
var barEnter = barUpdate.enter().append("div");
barEnter.transition().duration(3500).style("width", function(d){
	return d  + "px";
    });
    
barEnter.text(function(d){
	return d;
    });



var display = function(input){

    bar = chart.selectAll("div");

    barUpdate = bar.data(input);

    barUpdate = bar.data(spending2018);
    barEnter = barUpdate.enter().append("div");
    barEnter.transition().duration(3500).style("width", function(d){
	    return d  + "px";
	});
    
    barEnter.text(function(d){
	    return d;
	});
}

/*var switchYear = function(e){
    bar.innerHTML = "";
    if(year == 2018){
	year = 2021;
    }
    else{
	year = 2018;
    }
    display(year);
    }*/

//display(year);

switchButt.addEventListener("click", function() {display(spending2021)});