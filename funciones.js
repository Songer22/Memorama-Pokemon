function cambiarFondo() {
    for (i = 1; i <= 4; i++) {

        for (g = 1; g <= 9; g++) {
            var num = Math.random() * (4 - 1) + 1;
            num = Math.round(num);

            //document.getElementById('fondo' + i + ',' + g).className = 'green';
            if (num == 1) {
                document.getElementById('fondo' + i + ',' + g).className = "blue";

            }
            if (num == 2) {
                document.getElementById('fondo' + i + ',' + g).className = "green";
            }
            if (num == 3) {
                document.getElementById('fondo' + i + ',' + g).className = 'red';
            }
            var total1 = document.getElementById('total').val;
            if(total1 == 1){
                console.log("ganaste");
            }
        }

    }
}


function jugar() {
    document.getElementById('jugar').disabled = 'none';
    cartas = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.jpg', '9.png', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.png', '16.jpg', '17.jpg', '18.png', '1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.jpg', '9.png', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.png', '16.jpg', '17.jpg', '18.png'];
    cartas = cartas.sort(function () {
        return Math.random() - 0.5
    });
    for (i = 1; i <= 36; i++) {

        document.getElementById("img" + i).src = 'img/' + cartas[i - 1];
        document.getElementById("img" + i).value = cartas[i - 1];
        document.getElementById("img" + i).className = "bajar";
    }
    console.log(JSON.stringify(cartas));
    setTimeout(ocultar, 6000);
}


function ocultar() {

    for (i = 1; i <= 36; i++) {

        document.getElementById('img' + i).style.display = 'none';
        document.getElementById('simg' + i).style.display = 'block';

    }
}


var img = "";
var img2 = "";
var total = 0;

function mostrar(id) {
    var input1 = document.getElementById('input1').value;
    document.getElementById('simg' + id).style.display = 'none';
    document.getElementById('img' + id).style.display = 'block';
    //alert(input1);
    if (input1 == "") {
        var valor1 = document.getElementById('img' + id).value;
        document.getElementById('input1').value = valor1;
        img = id;
    } else {
        var valor2 = document.getElementById('img' + id).value;
        document.getElementById('input2').value = valor2;
        img2 = id;
        igual();
    }

}


function igual() {
    var input1 = document.getElementById('input1').value;
    var input2 = document.getElementById('input2').value;

    if (input1 == input2) {
        console.log("una menos");
        document.getElementById('input1').value = '';
        document.getElementById('input2').value = '';
        total = total + 1;
        document.getElementById('total').value = total;
    } else {
        for (g = 1; g <= 36; g++) {
            document.getElementById("simg" + g).disabled = true;
        }
        setTimeout(ocultarImg, 1000);

    }

}

function ocultarImg() {
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
    
    //alert(img2);
    document.getElementById('img' + img).style.display = 'none';
    document.getElementById('simg' + img).style.display = 'block';
    document.getElementById('img' + img2).style.display = 'none';
    document.getElementById('simg' + img2).style.display = 'block';
    for (g = 1; g <= 36; g++) {
        document.getElementById("simg" + g).disabled = false;
    }

    
}




$("#reiniciar").click(function (event) {
    $("#contenedor").load('index.php');
});
























function jgar() {


    for (i = 1; i <= 36; i++) {



        // for(g = 1;g<=6;g++){

        //cartasr = cartas.sort(function(){ return Math.random()-0.5});
        const randomMonth = cartas[Math.floor(Math.random() * cartas.length)];
        console.log(randomMonth);
        document.getElementById("img" + i).src = 'img/' + randomMonth;
        //cartas.splice(randomMonth, 1);

        //     console.log(cartasr);
        // }

    }

}

//document.write("My " + (n+1) + " choice is " + colours[n] + " in " + countrys[n] + " on " + days[n] + "<br>");