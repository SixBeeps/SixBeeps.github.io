const url = 'https://raw.githubusercontent.com/CurtisGrayeBabin/List-of-all-Foods/master/FOOD.txt'
$(document).ready(function(){
	$.get(url, function(data, status){
		$("#content").text(data.split(" ")[Math.floor(Math.random() * 20000) + 1])
	})
})