### Implementar HightCharts y i18next

**Paso a paso**: Lo primero que hice fue hacer los imports de los archivos, al final del html, podemos ver los imports.
Incluyendo a bootstrap, Estos imports son lo fundamental para que funcione como deberia.

Lo segundo empezar a hacer uso de las librerias, Para eso, He creado el **App.js** donde podemos hacemos la configuracion.
Aca inicializamos **i18next**, primer paso es decirle cual sera nuestro lenguaje como default. Luego cargamos los archivos **JSON**
en donde tendremos un Schema de nuestras palabras traducidas, Debe estar en la carpeta **locales** y dentro de ella pondremos nuestros lenguajes que queremos traducir,
por ejmplo **en, es, de, fr** y asi. Luego creamos un archivo llamado **translation.json** donde pondremos nuestro Schema.

Ya luego en nuestro **index.html** empezamos a traducir para esto colocamos el atributo **data-i18n** seguido de nuestro objecto json (ejemplo: data-i18n="nav.brand").
Luego volveos a nuestro **App.js** y donde hemos inicializado i18n, colocaremos lo que queremos traducir, por ejemplo `$('.btn-secondary').localize();` con esto le indicamos que localice nuestro button que tiene el atributo i18n y haga el trabajo nuestra libreria.

---

### HighCharts
Aca es muy simple, en nuestro **index.html** creamos un div con algun **id** y luego lo refenciamos en nuestro **App.js**.
donde crearemos una funcion, dentro de ella podremos nuestros [Highcharts Options.](https://www.highcharts.com/docs/getting-started/how-to-set-options), seguido
crearemos una variable que a su vez creara un objecto donde le iremos pasando otro objectos, como title, data, etc.

para las graficas usamos puntos ej.
```
series: [{
  name: 'Installation',
  data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
}, {
  name: 'Manufacturing',
  data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
}, {
  name: 'Sales & Distribution',
  data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
}, {
  name: 'Project Development',
  data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
}, {
  name: 'Other',
  data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
}]
```

Como crearemos varias funciones, necesitamos inicializar alguna como default para cuando cargue nuestra pagina.para ello simplemente colocamos
```
functionName()
```

y luego volvemos a nuestro **index.html** donde he creado un dropdown y cada list-item estara referenciando a nuestras funciones.

para crear varias graficas la crearemos dentro de la funcion del lenguage. Para los [lenguages de las graficas](https://api.highcharts.com/highcharts/lang) le pasamos las opciones ates de inicializar la grafica. ejemplo:
```
function chartGerman() {
    Highcharts.setOptions({
      // translate parameters of chart
        lang: {
          decimalPoint: ',',
          thousandsSep: '.',
          loading: 'Daten werden geladen...',
          months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
          weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
          shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
          exportButtonTitle: "Exportieren",
          printButtonTitle: "Drucken",
          rangeSelectorFrom: "Von",
          rangeSelectorTo: "Bis",
          rangeSelectorZoom: "Zeitraum",
          downloadPNG: 'Download als PNG-Bild',
          downloadJPEG: 'Download als JPEG-Bild',
          downloadPDF: 'Download als PDF-Dokument',
          downloadSVG: 'Download als SVG-Bild',
          resetZoom: "Zoom zurücksetzen",
          resetZoomTitle: "Zoom zurücksetzen"
       }
    });

    /* si queremos agregar mas graficas lo hacemos de esta manera,
    dentro de la funcion, creamos una variable referenciando al objeto */
    var chart1 = new Highcharts.Chart({
        // donde sera referenciado? por eso creamos un div con el id que pongamos aca
        chart: {
            renderTo: 'container1'
        },

        title: {
          text: 'Deutschland gewinnt die Welt'
        },


        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%A',
                hour: '%A %H',
            }
        },
        // datos para la grafica
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
            pointStart: Date.UTC(2011, 8, 12),
            pointInterval: Date.UTC(2011, 8, 13) - Date.UTC(2011, 8, 12) // one day
        }]

    });
    var chart2 = new Highcharts.Chart({
        // donde sera referenciado? por eso creamos un div con el id que pongamos aca
        chart: {
            renderTo: 'container2'
        },

        title: {
          text: 'Deutschland gewinnt die Welt'
        },


        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: {
                day: '%A',
                hour: '%A %H',
            }
        },
        // datos para la grafica
        series: [{
            data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6],
            pointStart: Date.UTC(2011, 8, 12),
            pointInterval: Date.UTC(2011, 8, 13) - Date.UTC(2011, 8, 12) // one day
        }]

    });
};

```
