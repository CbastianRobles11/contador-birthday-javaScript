const daysElement=document.getElementById('dias')
const hoursElement=document.getElementById('horas')
const minElement=document.getElementById('minutos')
const secElement=document.getElementById('segundos')


const hb="9 Nov 2021";

function cuentaregresiva(){

    const newYearDate=new Date(hb);
    const currentDate=new Date();

    const totalSegundos=(newYearDate-currentDate)/1000;

    //para que sea entero el numero de abajo
    const dias= Math.floor(totalSegundos/3600/24);
    const horas= Math.floor(totalSegundos/3600)%24;
    const minutos= Math.floor(totalSegundos/60)%60;
    const segundos= (Math.floor(totalSegundos)%60)+1;

    daysElement.innerHTML=dias
    hoursElement.innerHTML=horas
    minElement.innerHTML=minutos
    secElement.innerHTML=segundos

    //prbar el codigo
    // console.log(segundos);

}

cuentaregresiva();

//cada segundo hacer esto
setInterval(cuentaregresiva,1000)

