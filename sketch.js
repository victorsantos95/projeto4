Skip to Play Sketch
Cookies
The p5.js Editor uses cookies. Some are essential to the website functionality and allow you to manage an account and preferences. Others are not essential—they are used for analytics and allow us to learn more about our community. We never sell this data or use it for advertising. You can decide which cookies you would like to allow, and learn more in our Privacy Policy.


Allow All

Allow Essential
Arquivo
Editar
Esboço
Ajuda
Português
Olá, victor_jao1509!



Auto-atualizar

projeto 4
por victor_jao1509


Arquivos do Esboço


i
nde
x
.html

s
ketc
h
.js


s
tyl
e
.css

sketch.js
Salvo: 3 meses atrás
1
let palavra;
2
​
3
function setup() {
4
  createCanvas(600, 600);
5
  
6
  palavra = relânpago();
7
}
8
​
9
function draw() {
10
  macaco();
11
  coca ();
12
  relânpago();
13
}
14
​
15
function macaco(){
16
  background("black");
17
  fill("ligthblue");
18
  textSize(70);
19
textAlign(CENTER,CENTER);
20
}
21
  
22
function coca(){
23
​
24
  let maximo = width;
25
  let minimo = 0;
26
  let quantidade = map(mouseX, 0, width, 1, palavra.length);
27
  let inicio = palavra.substring(0, quantidade);
28
  text(inicio, 300, 300);
Não há mensagens de Lint
Linha atuallinha 1

Terminal
Limpar

​
Prévia
