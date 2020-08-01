const API_URL = "https://technological-progress-project.herokuapp.com/project-2-api/";
const computingPath = API_URL + 'computing_efficiency.json';
const microprocessorsPath = API_URL + 'microprocessor_clock_speed.json';
const priceChangesPath = API_URL + 'price_changes_in_consumer_goods_and_services_in_the_usa_1997_2017.json';
const nonCommercialFlightsPath = API_URL + 'non_commercial_flight_distance_records.json';
const humanGenomePath = API_URL + 'number_of_human_genome_base_pairs_sequenced_per_us.json';
const supercomputerFlopsPath = API_URL + 'supercomputer_power_flops.json';
const transistorsPerMicroprocessorPath = API_URL + 'transistors_per_microprocessor.json';
const investmentMexicoPath = API_URL + 'conacyt_investment_by_entity_mexico.json';


// ------- ***Computing efficiency**** --------
var xIntel = []
var yIntel = []

var xFrantz = []
var yFrantz = []

var xSmailagic = []
var ySmailagic = []

var elementos = 0
var nuevaData = []

d3.json(computingPath).then(data => {
    computingData = data.values


    computingData.forEach(el => {

        if (el["entity"] == "Intel") {
            xIntel.push(parseInt(el["year"]))
        }

        if (el["entity"] == "Frantz") {
            xFrantz.push(parseInt(el["year"]))
        }

        if (el["entity"] == "Smailagic") {
            xSmailagic.push(parseInt(el["year"]))
        }

        function comparar(a, b) {
            return a - b;
        }
        xIntel.sort(comparar);
        xFrantz.sort(comparar);
        xSmailagic.sort(comparar);
    })

    computingData.forEach(ele => {
        elementos++
        nuevaData.push(ele)
    })

    for (let i = 0; i < elementos; i++) {
        for (let j = 0; j < xIntel.length; j++) {
            if (xIntel[j] == nuevaData[i]["year"]) {
                yIntel[j] = (parseFloat(nuevaData[i]["computing"]))
            }

        }
        for (let j = 0; j < xFrantz.length; j++) {
            if (xFrantz[j] == nuevaData[i]["year"]) {
                yFrantz[j] = (parseFloat(nuevaData[i]["computing"]))
            }

        }
        for (let j = 0; j < xSmailagic.length; j++) {
            if (xSmailagic[j] == nuevaData[i]["year"]) {
                ySmailagic[j] = (parseFloat(nuevaData[i]["computing"]))
            }
        }

    }

});


// ---------- *** Price changes in consumer goods and services in the USA *** --------


var priceChangeYears = []
var nuevaDataPriceChange = []

var pcChildcare = []
var pcClothing = []
var pcCollegeTuitionFees = []
var pcEducation = []
var pcFood = []
var pcHouseholdEnergy = []
var pcHousing = []
var pcMedical = []
var pcNewCards = []
var pcPublicTransport = []
var pcSoftware = []
var pcToys = []
var pcTVs = []
var pcMedial = []

d3.json(priceChangesPath).then(data => {
    console.log("Price changes data", data);
    priceChange = data.values

    priceChange.forEach(el => {
        priceChangeYears.push(parseInt(el["year"]))

        function comparar(a, b) {
            return a - b;
        }
        priceChangeYears.sort(comparar);
    })

    priceChange.forEach(ele => {
        elementos++
        nuevaDataPriceChange.push(ele)
    })

    for (let j = 0; j < priceChangeYears.length; j++) {

        for (let i = 0; i < nuevaDataPriceChange.length; i++) {
            if (priceChangeYears[j] == nuevaDataPriceChange[i]["year"]) { //**** */
                pcChildcare[j] = (parseFloat(nuevaDataPriceChange[i]["childcare"]))
                pcClothing[j] = (parseFloat(nuevaDataPriceChange[i]["clothing"]))
                pcCollegeTuitionFees[j] = (parseFloat(nuevaDataPriceChange[i]["collegeTuitionFees"]))
                pcEducation[j] = (parseFloat(nuevaDataPriceChange[i]["education"]))
                pcFood[j] = (parseFloat(nuevaDataPriceChange[i]["foodBeverages"]))
                pcHouseholdEnergy[j] = (parseFloat(nuevaDataPriceChange[i]["householdEnergy"]))
                pcHousing[j] = (parseFloat(nuevaDataPriceChange[i]["housing"]))
                pcNewCards[j] = (parseFloat(nuevaDataPriceChange[i]["newCars"]))
                pcPublicTransport[j] = (parseFloat(nuevaDataPriceChange[i]["publicTransportation"]))
                pcSoftware[j] = (parseFloat(nuevaDataPriceChange[i]["software"]))
                pcToys[j] = (parseFloat(nuevaDataPriceChange[i]["toys"]))
                pcTVs[j] = (parseFloat(nuevaDataPriceChange[i]["year"]))  //******* */
                pcTVs[j] = (parseFloat(nuevaDataPriceChange[i]["medicalCare"]))

            }
        }
    }
    
});


// ----- ***Number of human genome base pairs sequenced per US$*** -----------------------------------

var genomeYears = []
var nuevaDataGenome = []
var yGenome = []

d3.json(humanGenomePath).then(data => { // console.log("Human genome pairs data", data);
    humanGenome = data.values

    humanGenome.forEach(el => {

        if (el["entity"] == "Genome") {
            genomeYears.push(parseInt(el["year"]))

        }
        function comparar(a, b) {
            return a - b;
        }
        genomeYears.sort(comparar);
    })


    humanGenome.forEach(ele => {
        elementos++
        nuevaDataGenome.push(ele)
    })

    for (let j = 0; j < genomeYears.length; j++) {
        for (let i = 0; i < nuevaDataGenome.length; i++) {
            if (genomeYears[j] == nuevaDataGenome[i]["year"]) {
                yGenome[j] = (parseFloat(nuevaDataGenome[i]["pairs"]))
            }
        }
    }
    
});


// -------- *** Non-commercial flight distance records *** ------------


var nonCommericalYears = []
var nuevaDataNonCommercial = []
var yNonCommercial = []
d3.json(nonCommercialFlightsPath).then(data => { // console.log("Non commercial flights data", data);
    nonCommercial = data.values

    nonCommercial.forEach(el => {

        if (el["entity"] == "Global") {
            nonCommericalYears.push(parseInt(el["year"]))

        }
        function comparar(a, b) {
            return a - b;
        }
        nonCommericalYears.sort(comparar);
    })


    nonCommercial.forEach(ele => {
        elementos++
        nuevaDataNonCommercial.push(ele)
    })

    for (let j = 0; j < nonCommericalYears.length; j++) {
        for (let i = 0; i < nuevaDataNonCommercial.length; i++) {
            if (nonCommericalYears[j] == nuevaDataNonCommercial[i]["year"]) {
                yNonCommercial[j] = (parseFloat(nuevaDataNonCommercial[i]["kilometers"]))
            }
        }
    }


});


// ------- *** Microprocessor clock speed *** -----------------

var microprocessorYears = []
var nuevaDataMicroprocessor = []
var yMicroprocessor = []

d3.json(microprocessorsPath).then(data => { // console.log("Microprocessors data", data);

    microprocessor = data.values

    microprocessor.forEach(el => {

        if (el["entity"] == "World") {
            microprocessorYears.push(parseInt(el["year"]))

        }
        function comparar(a, b) {
            return a - b;
        }
        microprocessorYears.sort(comparar);
    })


    microprocessor.forEach(ele => {
        elementos++
        nuevaDataMicroprocessor.push(ele)
    })

    for (let j = 0; j < microprocessorYears.length; j++) {
        for (let i = 0; i < nuevaDataMicroprocessor.length; i++) {
            if (microprocessorYears[j] == nuevaDataMicroprocessor[i]["year"]) {
                yMicroprocessor[j] = (parseFloat(nuevaDataMicroprocessor[i]["microprocessor"]))
            }
        }
    }
});


// ----- *** Supercomputer Power (FLOPS) *** ---------
var supercomputerYear = []
var nuevaDataSuperComputer = []
var ySuperComputer = []

d3.json(supercomputerFlopsPath).then(data => { // console.log("Supercomputer flops data", data);
    superComputer = data.values

    superComputer.forEach(el => {

        if (el["entity"] == "World") {
            supercomputerYear.push(parseInt(el["year"]))

        }
        function comparar(a, b) {
            return a - b;
        }
        supercomputerYear.sort(comparar);
    })


    superComputer.forEach(ele => {
        elementos++
        nuevaDataSuperComputer.push(ele)
    })

    for (let j = 0; j < supercomputerYear.length; j++) {
        for (let i = 0; i < nuevaDataSuperComputer.length; i++) {
            if (supercomputerYear[j] == nuevaDataSuperComputer[i]["year"]) {
                ySuperComputer[j] = (parseFloat(nuevaDataSuperComputer[i]["flops"]))
            }
        }
    }

});

// ----- *** Moore's Law: Transistors per microprocessor*** ---------

var transistorYear = []
var nuevaDataTransistor = []
var yTransistor = []

d3.json(transistorsPerMicroprocessorPath).then(data => { // console.log('Transistors per microprocessor data',data);
    transistor = data.values

    transistor.forEach(el => {

        if (el["entity"] == "World") {
            transistorYear.push(parseInt(el["year"]))

        }
        function comparar(a, b) {
            return a - b;
        }
        transistorYear.sort(comparar);
    })


    transistor.forEach(ele => {
        elementos++
        nuevaDataTransistor.push(ele)
    })

    for (let j = 0; j < microprocessorYears.length; j++) {
        for (let i = 0; i < nuevaDataTransistor.length; i++) {
            if (transistorYear[j] == nuevaDataTransistor[i]["year"]) {
                yTransistor[j] = (parseFloat(nuevaDataTransistor[i]["transistors"]))
            }
        }
    }

creartablaFLOPS()
creartablaPrice()
creartablaHuman()
creartablaNonComer()
creartablaMicro()
creartabla()

});


// ************************************************
d3.json(investmentMexicoPath).then(data => { // console.log("Investment by entity Mexico data", data);
});
// ************************************************


//****************************************************************************************************/
//-------------   Graficas ------------------------------------------------------//
//************************************************************************************************* */


// --------- *** Grafica de Computing efficiency *** ------

function creartabla(data) {
    var xField = 'esdfsdfDate';
    var selectorOptions = {
        buttons: [ {
            step: 'year',
            stepmode: 'todate',
            count: 2,
            label: '5y'
        }, {
            step: 'all',
        }],
    };

    var Intel = {
        x: xIntel,
        y: yIntel,
        name: "Intel Y axis2",
        yaxis: "y2",
        type: 'lines',        
    };

    var Frantz = {
        x: xFrantz,
        y: yFrantz,
        name: "Frantz",
        type: 'lines'
    };


    var Smailagic = {
        x: xSmailagic,
        y: ySmailagic,
        name: "Smailagic",
        type: 'lines'
    };
    var data1 = [Intel, Frantz, Smailagic];
    var layout = {
        title: {
            text:'Computing Efficiency, 1971 to 2015',
            font: {
              family: 'Playfair Display,Georgia,Times New Roman,serif',
              size: 24
            },
            xref: 'paper',
            x: 2,
          },
        xaxis: { 
            rangeselector: selectorOptions,
            rangeslider: {},
            title: 'Years'
        },
        yaxis: {
            title: 'W per MIPS',
            
            titlefont: {color: 'rgb(148, 103, 189)'},
            tickfont: {color: 'rgb(148, 103, 189)'},
            fixedrange: true
        },
        yaxis2: {
            title: 'W per MIPS',
            titlefont: {color: 'rgb(148, 103, 189)'},
            tickfont: {color: 'rgb(148, 103, 189)'},
            overlaying: 'y',
            side: "right"
        },
    };

    Plotly.newPlot('plot', data1, layout);
    Plotly.newPlot('plot2', data1, layout);
}

d3.select("#computing-card").on("click", () => creartabla());

// --------- *** Microprocessor clock speed *** ------

function creartablaMicro(data) {

    var Micro = {
        x: microprocessorYears,
        y: yMicroprocessor,
        type: 'lines'
    };

    var data1 = [Micro];

    var layout = {
        title: {
            text:'Microprocessor clock speed',
            font: {
              family: 'Playfair Display,Georgia,Times New Roman,serif',
              size: 24
            },
            xref: 'paper',
            x: 2,
          },
        xaxis: {

            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
    };
    Plotly.newPlot('plot', data1, layout);
    Plotly.newPlot('plot3', data1, layout);
}
d3.select("#microprocessor-card").on("click", () => creartablaMicro());

// --------- *** Non-commercial flight distance records*** ------

function creartablaNonComer(data) {

    var Micro = {
        x: nonCommericalYears,
        y: ySuperComputer,
        type: 'scatter'
    };
    var data1 = [Micro];
    var layout = {
         title: {
            text:'Non-commercial flight distance records, 1800 to 2006',
            font: {
              family: 'Playfair Display,Georgia,Times New Roman,serif',
              size: 24
            },
            xref: 'paper',
            x: 2,
          },
        xaxis: {

            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
    };
    Plotly.newPlot('plot', data1, layout);
    Plotly.newPlot('plot4', data1, layout);
}
d3.select("#flightrecords-card").on("click", () => creartablaNonComer());

// --------- *** Number of human genome base pairs sequenced per US$*** ------
function creartablaHuman(data) {

    var human = {
        x: genomeYears,
        y: yGenome,
        type: 'scatter'
    };
    var data1 = [human];
    var layout = {
        title: {
            text:'Number of human genome base pairs sequenced per US$',
            font: {
              family: 'Playfair Display,Georgia,Times New Roman,serif',
              size: 24
            },
            xref: 'paper',
            x: 2,
          },
        xaxis: {

            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
    };
    Plotly.newPlot('plot', data1, layout);
    Plotly.newPlot('plot5', data1, layout);
}
d3.select("#genomepairs-card").on("click", () => creartablaHuman());

// --------- *** Price changes in consumer goods and services in the USA*** ------
function creartablaPrice(data) {
    var pcChildcareH = {
        x: priceChangeYears,
        y: pcChildcare,
        name: "childcare",
        type: 'lines'
    };
    var pcClothingH = {
        x: priceChangeYears,
        y: pcClothing,
        name: "clothing",
        type: 'lines'
    };
    var pcCollegeTuitionFeesH = {
        x: priceChangeYears,
        y: pcCollegeTuitionFees,
        name: "College Tuition Fees",
        type: 'lines'
    };
    var pcEducationH = {
        x: priceChangeYears,
        y: pcEducation,
        name: "Education",
        type: 'lines'
    };
    var pcFoodH = {
        x: priceChangeYears,
        y: pcFood,
        name: "Food and Beverages",
        type: 'lines'
    };
    var pcHouseholdEnergyH = {
        x: priceChangeYears,
        y: pcHouseholdEnergy,
        name: "Energy",
        type: 'lines'
    };
    var pcHousingH = {
        x: priceChangeYears,
        y: pcHousing,
        name: "Housing",
        type: 'lines'
    };
    var pcMedicalH = {
        x: priceChangeYears,
        y: pcMedical,
        name: "Medical Care",
        type: 'lines'
    };
    var pcNewCardsH = {
        x: priceChangeYears,
        y: pcNewCards,
        name: "New Cars",
        type: 'lines'
    };
    var pcPublicTransportH = {
        x: priceChangeYears,
        y: pcPublicTransport,
        name: "Public Transportation",
        type: 'lines'
    };
    var pcSoftwareH = {
        x: priceChangeYears,
        y: pcSoftware,
        name: "Software",
        type: 'lines'
    };
    var pcToysH = {
        x: priceChangeYears,
        y: pcToys,
        name: "Toys",
        type: 'lines'
    };
    var pcTVsH = {
        x: priceChangeYears,
        y: pcTVs,
        name: "Toys",
        type: 'lines'
    };
    var pcMedialH = {
        x: priceChangeYears,
        y: pcMedial,
        name: "TVs",
        type: 'lines'
    };
    var data1 = [pcChildcareH, pcClothingH,pcCollegeTuitionFeesH,  pcEducationH,pcFoodH, pcHouseholdEnergyH,pcHousingH,pcMedicalH,pcNewCardsH,pcPublicTransportH,pcPublicTransportH, pcSoftwareH,pcToysH, pcTVsH,pcMedialH];
    var layout = {
        title: {
            text:'Price changes in consumer goods and services in the USA',
            font: {
              family: 'Playfair Display,Georgia,Times New Roman,serif',
              size: 24
            },
            xref: 'paper',
            x: 2,
          },
        xaxis: {

            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
    };
    Plotly.newPlot('plot', data1, layout);
    Plotly.newPlot('plot6', data1, layout);
}
d3.select("#pricechanges-card").on("click", () => creartablaPrice());

// --------- *** Supercomputer Power (FLOPS)*** ------
function creartablaFLOPS(data) {

    var human = {
        x: supercomputerYear,
        y: ySuperComputer,
        type: 'scatter'
    };
    var data1 = [human];
    var layout = {
        title: {
            text:'Supercomputer Power (FLOPS), 1993 to 2017',
            font: {
              family: 'Playfair Display,Georgia,Times New Roman,serif',
              size: 24
            },
            xref: 'paper',
            x: 2,
          },
        xaxis: {

            rangeslider: {}
        },
        yaxis: {
            fixedrange: true
        }
    };
    Plotly.newPlot('plot', data1, layout);
    Plotly.newPlot('plot75', data1, layout);
}
creartablaFLOPS()
d3.select("#supercomputer-card").on("click", () => creartablaFLOPS());



