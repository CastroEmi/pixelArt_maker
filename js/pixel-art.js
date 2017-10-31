var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable jQuery para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var $colorPersonalizado = $('#color-personalizado');

$colorPersonalizado.change(function() {
  // Se guarda el color de la rueda en colorActual
  var colorActual = $colorPersonalizado.val();
  // Completar para que cambie el indicador-de-color al colorActual
  $('#indicador-de-color').css('background-color', colorActual);
});


// Tomo elementos del DOM.
var $paleta = $('#paleta');
var $grilla = $('#grilla-pixeles');

// Función para generar la paleta de colores.
function generarPaleta () {
  nombreColores.forEach(function (element) {
    $paleta.append( $('<div>', {'class': 'color-paleta'}).css('background-color', element));
  });
};

generarPaleta();

// Funcion generar grilla de pixeles
function grillaPixeles () {
  for (var i = 0; i < 1749; i++) {
    var $div = $('<div>');
    $grilla.append($div);
  }
}

grillaPixeles();

// Función para que al hacer clic en algún color, el indicador-de-color cambie\a y refleja la selección.
function cambiarColor () {
  $('.color-paleta').click( function () {
    var color = $(this).css('background-color');
    $('#indicador-de-color').css('background-color', color);
  })
}

cambiarColor();


// Función para que el usuario pueda pintar un píxel al hacer clic en un cuadrado de la grilla.
function pintar () {
var $pixel = $('#grilla-pixeles div');
  $pixel.click( function (event) {
    var color = $('#indicador-de-color').css('background-color');

    $(event.target).css('background-color', color);
  });

};

pintar();

// Función para pintar trazos mientras se mantenga presionado el boton del mouse.
function pintarTrazos(event) {
  // Chequea si el botón del mouse está presionado o no.
  var clickPresionado = false;

  $grilla.mousedown( function () {
     clickPresionado = true;
     }
   );

 $grilla.mouseup( function () {
     clickPresionado = false;
    }
  );

/* Este codigo permite que al mover el mouse pinte los pixeles mientras el mouse
   se mantenga presionado */
    $grilla.mousemove(function (event) {
      if (clickPresionado === true) {
      var color = $('#indicador-de-color').css('background-color');

      $(event.target).css('background-color', color);
    };
  });

}
pintarTrazos();


// Función que permite borrar los pixeles clickeando el boton "Borrar todo"
function borrar () {
  var $boton = $('#borrar');
  var $pixel = $('#grilla-pixeles div');
  $boton.click(function () {
    $pixel.each( function () {
      $(this).animate({"background-color": "white"}, 500);
    })
  })
}

borrar();


// Función para que cuando el usuario haga click en la imagen de un superheroe se cargue en la grilla
function importarSuperheroe () {
  $('#batman').click( function () {
    cargarSuperheroe(batman);
  });
  $('#wonder').click( function () {
    cargarSuperheroe(wonder);
  });
  $('#flash').click( function () {
    cargarSuperheroe(flash);
  });
  $('#invisible').click( function () {
    cargarSuperheroe(invisible);
  });
}

importarSuperheroe();

// Al cliquear el botón Guardar el usuario puede descargar su proyecto
$('#guardar').click( function () {
  guardarPixelArt();
})
