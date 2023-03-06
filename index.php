<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Memorama</title>
    
</head>
<link rel="stylesheet" href="estilos.css">

<body background="img/fondo.png">
    <div class="contenedor" id="contenedor">
        <h1 align="center">Memorama</h1>
        <table>

            <?php
    $S = 1;
        for($i = 1;$i <= 4;$i++){
            
            echo "<tr>";

                for($g = 1;$g <= 9;$g++){
                    echo '<td><div class="blue" id="fondo'.$i.','.$g.'"><input class="input" id="img'.$S.'" type="image" src="img/signo.png"> 
                    <input class="hover bajar" id="simg'.$S.'" onclick="mostrar('.$S.')" type="image" src="img/signo.png" hidden></div></td>';
                    $S = $S +1;
                }

            echo "</tr>";

        }
    ?>

        </table>
        <br>
        <div align="center">
            <button class="boton_personalizado" id="jugar" onclick="jugar();">Jugar</button>
            <button class="boton_personalizado " id="reiniciar">Reiniciar</button>
        </div>
        <input type="text" id="input1" hidden>
        <input type="text" id="input2" hidden>
        <input type="text" id="total" value="0" hidden>
    </div>
</body>
<script src="jquery-3.4.1/jquery.js"></script>

<script src="funciones.js"></script>
<script>
    var intervalID = window.setInterval(cambiarFondo, 100);
</script>

</html>