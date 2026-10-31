const color = document.getElementById('color');
const boton = document.getElementById('boton');

const aleatorio = () =>{

    let hexadecimal = '0123456789ABCDEF';
    let colorHex = '#';
    
    for (let i = 0; i < 6; i++){
        let num = Math.floor(Math.random() * 16);
        colorHex += hexadecimal[num];
    }

    return colorHex;
}

boton.addEventListener('click', cambioColor = () => {
    let newColor = aleatorio();
    color.textContent = newColor;
    document.body.style.backgroundColor = newColor;

});
 

