const concat = (abc){
	return abc.length <= 1 ? "argumen yang dimasukan minimal 2" : abc.join(""); 
};

console.log(concat("seleksi","pelatihan"));
console.log(concat("semangat","mengerjakan","soal","seleksi")); 