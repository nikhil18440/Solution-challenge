let mainText = document.getElementById('mainHeading');
let SampleText = 'Solution Challenge'; 
let letters = SampleText.split("") ; 
for (let i = 0; i < letters.length; i++) {     
  let letterSpan = document.createElement('span')  ;   letterSpan.setAttribute('id',letters[i])   ; 
  let letterText = document.createTextNode(letters[i]);     letterSpan.appendChild(letterText);     mainText.appendChild(letterSpan);     console.log(letterSpan) } ;
let sec1 = document.getElementsByClassName('sec1')[0] ;
let j = 0 ;
let k = 1 ;
for (let i = 0; i < 18; i++) {     let img = document.createElement('img') ;                         img.setAttribute('id',`sec1Img${i}`) ;
if(k<=5){         img.setAttribute('src', `/Untitled-${k}.png`)  ;       k++     }else{         k=1 ;        img.setAttribute('src', `/Untitled-${k}.png`)     } ;     img.style.position = 'absolute'  ;   img.style.zIndex = -1;     img.style.left = `${j}px` ;    j = j+80     ;     if(i%2!==0){         img.style.top = 0        ; img.setAttribute('class',`sec1ImgOdd`);
sec1.appendChild(img);
}else{
 img.style.bottom = 0  ;img.setAttribute('class',`sec1ImgEven`);
sec1.appendChild(img);}}
