function myFunction(){
var input = "#number";
var result = [];
for (var i = 1; i <=input; i++){
if ((i % 15) === 0){
document.write ("Ping-Pong");
} else if ((i % 5) === 0){
document.write("Pong");
} else ((i % 3) === 0){
document.write("Ping");
}
};