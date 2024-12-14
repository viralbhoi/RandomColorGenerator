let btn = document.querySelector('button')

btn.addEventListener('click', () =>{
    let h1 = document.querySelector('h1');
    let randomColor = getrandomColor(); 
    h1.innerHTML = randomColor;
    document.querySelector('div').style.backgroundColor = randomColor;
})

function getrandomColor()  {
    let red = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${blue},${green})`;

    return color;
}