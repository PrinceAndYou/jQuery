$.fn.extend({
	pagination : function(total){
		var currentIndex = option.index || 0,
			size = option.size || 20,
			total = option.total,
			pageLen = Math.ceil(total / size),
			i = 0,
			renderPageLen = Math.min(pageLen, 10)
			_this = this;
		function renderPagination(){
			var i = 0;
			_this.html("");
		}
		
	}
});
$(".pagination").pagination({
	index : 0,
	size : 10,
	total : 500,
	render : function(index){

	}
});