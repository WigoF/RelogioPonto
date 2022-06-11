function clock(){
    

  var h = new Date().getHours();
  var m = new Date().getMinutes();
  var s = new Date().getSeconds();

  var hours = document.getElementById("hour").innerHTML = h;
  var minutes = document.getElementById("minutes").innerHTML = m;
  var seconds = document.getElementById("seconds").innerHTML = s;

}

var interval = setInterval(clock, 1000);


const Submit = (event) => {
    event.preventDefault;

    const entradaSaida = document.querySelector('input[name=registro]').value;

    fetch('https://sheetdb.io/api/v1/jcm2zvyaztndq', {

        method: 'post',
        headers: {
            'Accept': 'application/jason',
            'Content-Type': 'application/jason'
        },

        body:JSON.stringify({entradaSaida}),
    });
}

document.querySelector('form').addEventListener('submit', Submit);