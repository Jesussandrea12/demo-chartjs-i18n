// use plugins and options as needed, for options, detail see
// http://i18next.com/docs/
// import i18next from 'i18next';

i18next
  .use(i18nextXHRBackend)
  .init({
  lng: 'en', // evtl. use language-detector https://github.com/i18next/i18next-browser-languageDetector
  backend: {
    // for all available options read the backend's repository readme file
    loadPath: 'locales/{{lng}}/{{ns}}.json'
  },
  // resources: { // evtl. load via xhr https://github.com/i18next/i18next-xhr-backend
  //   en: {
  //     translation: {
  //       input: {
  //         placeholder: "a placeholder"
  //       },
  //       nav: {
  //         home: 'Home',
  //         page1: 'Page One',
  //         page2: 'Page Two'
  //       }
  //     }
  //   }
  // }
}, function(err, t) {
  // for options see
  // https://github.com/i18next/jquery-i18next#initialize-the-plugin
  jqueryI18next.init(i18next, $);
  // start localizing, details:
  // https://github.com/i18next/jquery-i18next#usage-of-selector-function
  // $('.nav').localize();
  $('.navbar').localize();
  $('.form').localize();
  $('.btn-primary').localize();
  $('.btn-secondary').localize();

  $('.lang-select').click(function() {
       i18next.changeLanguage(this.innerHTML, function() {
          // $('.nav').localize();
          $('.navbar').localize();
          $('.form').localize();
          $('.btn-primary').localize();
          $('.btn-secondary').localize();
       });
     });
});


// highcharts

// put english as default
function chartEnglish() {
    // aca podemos pasar opciones que queramos que tenga la grafica como lenguajes, borders, etc
    Highcharts.setOptions({
      // dejamos el lenguaje default que es ingles
      // traducciones listas aca: https://stackoverflow.com/questions/7419358/highcharts-datetime-localization
       //  lang: {
       //    decimalPoint: ',',
       //    thousandsSep: '.',
       //    loading: 'Daten werden geladen...',
       //    months: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
       //    weekdays: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
       //    shortMonths: ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
       //    exportButtonTitle: "Exportieren",
       //    printButtonTitle: "Drucken",
       //    rangeSelectorFrom: "Von",
       //    rangeSelectorTo: "Bis",
       //    rangeSelectorZoom: "Zeitraum",
       //    downloadPNG: 'Download als PNG-Bild',
       //    downloadJPEG: 'Download als JPEG-Bild',
       //    downloadPDF: 'Download als PDF-Dokument',
       //    downloadSVG: 'Download als SVG-Bild',
       //    resetZoom: "Zoom zurücksetzen",
       //    resetZoomTitle: "Zoom zurücksetzen"
       // }
    });

    var chart1 = new Highcharts.Chart({
        // donde sera referenciado? por eso creamos un div con el id que pongamos aca
        chart: {
            renderTo: 'container',
        },

        xAxis: {
            type: 'datetime'
        },

        // podemos poner opciones como titulos, subtitulos, etc...
        title: {
          text: 'Solar Employment Growth by Sector, 2010-2016'
        },

        subtitle: {
          text: 'Source: thesolarfoundation.com'
        },

        yAxis: {
          title: {
            text: 'Number of Employees'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },

        // datos para la grafica
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
        }],

        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
    });

    var chart2 = new Highcharts.Chart({
        // donde sera referenciado? por eso creamos un div con el id que pongamos aca
        chart: {
            renderTo: 'container2'
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

// initialize default
chartEnglish()

// high chart german
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

    var chart1 = new Highcharts.Chart({
        // donde sera referenciado? por eso creamos un div con el id que pongamos aca
        chart: {
            renderTo: 'container',
        },

        xAxis: {
            type: 'datetime'
        },

        title: {
          text: 'Wachstum der solaren Beschäftigung nach Sektoren, 2010-2016'
        },

        subtitle: {
          text: 'Quelle: thesolarfoundation.com'
        },

        yAxis: {
          title: {
            text: 'Anzahl der Angestellten'
          }
        },
        legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
        },

        plotOptions: {
          series: {
            label: {
              connectorAllowed: false
            },
            pointStart: 2010
          }
        },
        // datos para la grafica
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
        }],

        responsive: {
          rules: [{
            condition: {
              maxWidth: 500
            },
            chartOptions: {
              legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
              }
            }
          }]
        }
    });

    /* si queremos agregar mas graficas lo hacemos de esta manera,
    dentro de la funcion, creamos una variable referenciando al objeto */
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
