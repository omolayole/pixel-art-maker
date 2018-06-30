$(function() { 
	// Select color input
	var colorPicker = $("#colorPicker");

	// Select size input
	var inputHeight = $("#inputHeight");
	var inputWeight = $("#inputWeight");

	// When size is submitted by the user, call makeGrid()
	$("#sizePicker").submit(function makeGrid(event) {
		//clear the table row
		$("#pixelCanvas tr").remove();

		//get the height enter by the user using val() function
		//and store the value in the variable heightValue
		var heightValue = inputHeight.val();

		//get the width enter by the user using val() function
		//and store the value in the variable widthValue
		var widthValue = inputWeight.val();

		//Your code goes here!
		//use nested for loop to create row and column for 
		//the grid using the height value and the width value
		//supply by the user
		for (var r = 1; r <= heightValue; r++) {
			$("#pixelCanvas").append('<tr></tr>');
			for (var c = 1; c <= widthValue; c++) {
				$("tr:last").append('<td class="cells"></td>');
				//$("td").attr("class", "cells");
			} 
		}
		event.preventDefault();

		//when the table cell is clicked, fill the cell with choosen color
		$(".cells").click(function(event) {
			var colorValue = colorPicker.val();
			$(event.target).css("background-color", colorValue)
		});
	});
});
