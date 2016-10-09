$(".project").keyup(function(){
	var check = function(str){
		var a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
		var i = 0,
			aLen = a.length;
		while(i < aLen){
			a.push(a[i++].toUpperCase());
		}
		a = a.concat(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
		var j = 0,
			strLen = str.length;
		while(j < strLen){
			if(!~a.indexOf(str[j++])){
				return 0;
			}
		}
		return 1;
	}
})
//hehehe