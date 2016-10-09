//表单二提交
$(".form2 input[type=\"button\"]:first").click(function(){
	$(".form2").submit();
});
//表单二重置
$(".form2 input[type=\"button\"]:last").click(function(){
	$(".form2").reset();
});

//表单三提交
$(".form3 input[type=\"button\"]").click(function(){
	$.ajax({
		type : "post",
		url : "http://www.ikindness.cn/api/test/post",
		data : {
			input : $(".input").val(),
			test : $(".test").val()
		},
		success : function(data){
			console.log(data);
		}
	});
});

//表单四提交
$(".form4 input[type=\"button\"]").click(function(){
	console.log("?" + $(".form4").serialize);
	$.ajax({
		url : "http://www.ikindness.cn/api/test/get?" + $(".form4").serialize(),
		success : function(data){
			console.log(data);
		}
	});
});
$(".empty").keyup(function(){
	var value = $(this).val();
})
//RegExp
var reg1 = /a/;

//实例化正则对象
var reg2 = new RegExp("a");

//字符串结合正则

//字符串的正则匹配方法search
//类似indexOf，但是参数可接收正则表达式，返回值是正则表达式匹配到的下标
console.log("\tac".search(reg1));

//字符串的replace方法第一个参数也能接收正则表达式，替换被匹配的内容
console.log("\tact".replace(reg2,"u"));

//字符串的split方法参数也能接受正则表达式，根据正则表达式的规则进行字符串的切割
console.log("\tact".split(reg2));

//字符串的match方法，返回匹配到的字符串部分集合
console.log("\tacva".match(reg1));

//正则对象的匹配方法

//test去检测字符串是否有匹配到正则表达式
//返回值是true或false
console.log(reg1.test("\tact"));

//正则表达式规则
console.log(/aaa/.test("aada"));


//标识符

//i
//即ignore case不区分大小写
console.log(/asdf/i.test("ASdf"));

//g 
//即global匹配所有
console.log("asdasasdasdfadsdasdadasdfasd".match(/asd/g));

console.log("asdasasdAsdfadsdasdadAsdfasd".match(/asd/ig));

//特殊元字符

//\t
//即tab匹配制表符	
console.log("asdasdf	asd".match(/\t/));

//\n
//即newline匹配换行符
console.log("asdasd\nasdasd".match(/\n/));

//\r
//即return匹配回车
console.log("asdasd\rasdasd".match(/\r/));

//\s  \S = !\s 正好相反
//即space匹配空格及制表符及换行符
console.log("asd asd asd 	asdasd asd \r asd".match(/\s/g));

//\d  \D = !\d 正好相反
//即digit匹配0到9的数字
console.log("sa123132131-=asd44".match(/\d/g));

//\w
//即word匹配0到9的数字及大小写英文字母及下划线
console.log("asdfwa(%&%^&*1_2345-ds".match(/\w/g));

//\b \B = !\b 正好相反
//即block匹配单词边界 是否已到边界
console.log("internationalization".match(/inter\b/));

//.
//匹配所有（除了\r）
console.log("snaldkndlasn\r\b\w)(*&^%".match(/./g));

//\转义
//[]().\
console.log("()".match(/\(\)/g));

//中括号
//中括号里的0123即0或1或2或3
console.log("1120354695".match(/[0123]/g));
console.log("1120354695".match(/[0-5]/g));

//单个匹配而不是一起匹配
console.log("asdaf(&sd*^&^21fa31".match(/[asdf]/g));

console.log("asdaf(&sd*^&^21fa31".match(/[\d]/g));

console.log("asdaf(&sd*^&^21fa31".match(/[\w]/g));

//一起匹配	
console.log("asda	f(&sd*^&^21fa31".match(/[\t]\w\t/g));

//^对中括号内规则的取反
console.log("123454asdasd32".match(/[^\d]/g));

//0-5即0到5
console.log("03210002".match(/[0-5]/))

//大写的元字符匹配规则，表示对小写匹配规则的取反

//数量级
//单独使用时表示数量级尽量多的去匹配

//*匹配前一个规则任意次,如果这个规则匹配到了0次，也会算作匹配到，内容（返回值）为空字符串
console.log("123123123wqe3212".match(/\d*/));
console.log("asd1212)(*^&*()(".match(/\w*/g));

//?匹配前一个规则0次或一次
console.log("132".match(/\d?/g));
console.log("132".match(/\d??/g));


//+匹配前一个规则至少一次
console.log("123asdas1321".match(/\d+/g));
console.log("123asdas1321".match(/\d+?$/));//后面加上$ ?就失去了效果

//{m}匹配前一个规则m次
console.log("12080asd1231sadf2asd33".match(/\d{3}/));

//{m,}匹配前一个规则至少m次
console.log("asd12asd3231sadf2asd33".match(/\d{3,}/));

//{0,m}匹配前一个规则最多m次
console.log("12080asd1231sadf2asd33".match(/\d{0,3}/));

//{m,n}自定义匹配前一个规则的次数，匹配前一个规则m次至n次
console.log("123as1d1a1s11321".match(/\d{1,3}/g));

//^以后面的规则由字符串开始
console.log("1232321".match(/^\d/));
console.log("sda123dasd2321".match(/^\d/));
console.log("123asd1232321".match(/^\d/));

//$以前面的规则结束
console.log("121321".match(/\d$/));
console.log("121asd321".match(/\d$/));
console.log("121asd".match(/\d$/));
console.log("121asd".match(/\d+$/));

//第二位0,4,6,9
console.log(/^1[^0-2469]\d{9}$/.test("18345678901"));

//()表示分组
console.log("asd1d2d301321".match(/as(d\d)+/g));

//|表示或者 
console.log("asdasasdAsdfadsdasdadAsdfasd".match(/[a-c]|\d/g));

console.log(/^((((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6-[1-5])|7|(8[1-2]))0000)|((886|852|853)000))((19[0-9][0-9])|20[0-1][0-6])((0[1-9])|(1[0-2]))(((0[1-9])|([1-2][0-9]))|(3[0-1]))\d{3}([0-9]|x)$/.test("11000020161231225x"));

console.log("andsaln156313".match(/[a-d1-5]/g));
//小括号里的开始处使用?:取消引用，对不必要的小括号引用加上?:可以提高正则表达式的运算效率
console.log("11000020161231225x".match(/^((((1[1-5])|(2[1-3])|(3[1-7])|(4[1-6])|(5[0-4])|(6-[1-5])|7|(8[1-2]))0000)|((886|852|853)000))((19[0-9][0-9])|20[0-1][0-6])((0[1-9])|(1[0-2]))(((0[1-9])|([1-2][0-9]))|(3[0-1]))\d{3}([0-9]|x)$/));

//replace方法中的第一个参数如果是正则，有存在分组，则第二个参数可以通过$n使用对应的分组，比如$1找到第一个小括号里匹配到的内容
console.log("asdf123asdf".replace(/(\w\d)/, "6$16"));

//正则表达式中使用\n可以获取到前面被小括号分组匹配到的内容，比如\1找到第一个小括号里匹配到的内容
console.log("asdf123asdf".match(/(asdf)123\1/));
console.log("asdf123\1asdf".match(/(?:asdf)123\1/));

console.log(/<([a-z]+[a-z\d][^>]*)*>.*<(\/\1)>$/.test("<div>123135</div>"));