
var meuRegex = new RegExp();
meuRegex.source = '\d{4}';
var result = meuRegex.test("88066270");
console.log(result);
var regexTelefone = /\d{5}[\-]?\d{4}$|\d{4}[\-]?d{4}$/;
var regexTelefone = /((\d{5})|(\d{4}))[\-]?(\d{4})$/;
var tel1 = "998113358";
var tel2 = "99811-3358".test(/\d{5}/);
var tel3 = "98113358";
var result = tel3.match(regexTelefone);

console.log(result);
console.log(result[1] + "-" + result[result.length-1]);