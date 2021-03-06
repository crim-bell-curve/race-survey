// responses on scale from 1 (low) to 5 (high) 

function createRaceChart() {
    var chart = c3.generate({
        data: {
            columns: [
                ['Agree',.85,.75,.78,.77,.77,.57],
                ['Disagree',.04,.12,.02,.02,.05,.13],
                ['Mean',4.00,3.56,3.81,3.81,3.83,3.32]
            ],
            type: 'bar',
            types: {
                Mean: 'spline'
            },
            axes: {
                Agree: 'y',
                Disagree: 'y',
                Mean: 'y2'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['White', 'Black', 'Asian', 'Latino', 'Multiracial', 'Other (including Middle Eastern)'],
            },
            y: {
                tick: {
                    format: d3.format('%')
                }
            },
            y2: {
                show: true,
                min: 0,
                max: 4.5
            }
        },
        legend: {
            position: 'right'
        },
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    var format = id === 'Mean' ? d3.format(',') : d3.format('%');
                    return format(value);
                }
            }
        },
        bindto: '#chart1'
    })
}
function createYearChart() {
    var chart = c3.generate({
        data: {
            columns: [
                ['Agree',.87,.80,.79,.83],
                ['Disagree',.02,.04,.05,.05],
                ['Mean',4.04,3.91,3.81,3.90]
            ],
            type: 'bar',
            types: {
                Mean: 'spline'
            },
            axes: {
                Agree: 'y',
                Disagree: 'y',
                Mean: 'y2'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Freshmen', 'Sophomores', 'Juniors', 'Seniors']
            },
            y: {
                tick: {
                    format: d3.format('%')
                }
            },
            y2: {
                show: true,
                min: 0,
                max: 4.5
            }
        },
        legend: {
            position: 'right'
        },
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    var format = id === 'Mean' ? d3.format(',') : d3.format('%');
                    return format(value);
                }
            }
        },
        bindto: '#chart2'
    })
}
function createSexOChart() {
    var chart = c3.generate({
        data: {
            columns: [
                ['Agree',.83,.84,.71],
                ['Disagree',.04,.01,.11],
                ['Mean',3.92,4.00,3.50]
            ],
            type: 'bar',
            types: {
                Mean: 'spline'
            },
            axes: {
                Agree: 'y',
                Disagree: 'y',
                Mean: 'y2'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Heterosexual', 'BGLQ', 'Rather not say']
            },
            y: {
                tick: {
                    format: d3.format('%')
                }
            },
            y2: {
                show: true,
                min: 0,
                max: 4.5
            }
        },
        legend: {
            position: 'right'
        },
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    var format = id === 'Mean' ? d3.format(',') : d3.format('%');
                    return format(value);
                }
            }
        },
        bindto: '#chart3'
    })
}
function createGenderChart() {
    var chart = c3.generate({
        data: {
            columns: [
                ['Agree',.86,.81],
                ['Disagree',.04,.04],
                ['Mean', 3.94,3.90]
            ],
            type: 'bar',
            types: {
                Mean: 'spline'
            },
            axes: {
                Agree: 'y',
                Disagree: 'y',
                Mean: 'y2'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Male', 'Female']
            },
            y: {
                tick: {
                    format: d3.format('%')
                }
            },
            y2: {
                show: true,
                min: 0,
                max: 4.5
            }
        },
        legend: {
            position: 'right'
        },
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    var format = id === 'Mean' ? d3.format(',') : d3.format('%');
                    return format(value);
                }
            }
        },
        bindto: '#chart4'
    })
}
function createRaceChart2() {
    var chart = c3.generate({
        data: {
            columns: [
                ['Agree',.88,.65,.76,.77,.82,.77],
                ['Disagree',.03,.013,.04,.07,.03,.03],
                ['Mean', 4.12,3.38,3.68,3.79,3.98,3.82]
            ],
            type: 'bar',
            types: {
                Mean: 'spline'
            },
            axes: {
                Agree: 'y',
                Disagree: 'y',
                Mean: 'y2'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['White', 'Black', 'Asian', 'Latino', 'Multiracial', 'Other (include Middle Eastern)']
            },
            y: {
                tick: {
                    format: d3.format('%')
                }
            },
            y2: {
                show: true,
                min: 0,
                max: 4.5
            }
        },
        legend: {
            position: 'right'
        },
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    var format = id === 'Mean' ? d3.format(',') : d3.format('%');
                    return format(value);
                }
            }
        },
        bindto: '#chart5'
    })
}
function createSexOChart2() {
    var chart = c3.generate({
        data: {
            columns: [
                ['Agree',.85,.85,.84],
                ['Disagree',.03,.03,0],
                ['Mean',4.05,3.92,3.87]
            ],
            type: 'bar',
            types: {
                Mean: 'spline'
            },
            axes: {
                Agree: 'y',
                Disagree: 'y',
                Mean: 'y2'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Heterosexual', 'BGLQ', 'Rather not say']
            },
            y: {
                tick: {
                    format: d3.format('%')
                }
            },
            y2: {
                show: true,
                min: 0,
                max: 4.5
            }
        },
        legend: {
            position: 'right'
        },
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    var format = id === 'Mean' ? d3.format(',') : d3.format('%');
                    return format(value);
                }
            }
        },
        bindto: '#chart6'
    })
}
function createGenderChart2() {
    var chart = c3.generate({
        data: {
            columns: [
                ['Agree',.83,.86],
                ['Disagree',.04,.03],
                ['Mean', 3.99,4.06]
            ],
            type: 'bar',
            types: {
                Mean: 'spline'
            },
            axes: {
                Agree: 'y',
                Disagree: 'y',
                Mean: 'y2'
            }
        },
        bar: {
            width: {
                ratio: 0.5
            }
        },
        axis: {
            x: {
                type: 'category',
                categories: ['Male', 'Female']
            },
            y: {
                tick: {
                    format: d3.format('%')
                }
            },
            y2: {
                show: true,
                min: 0,
                max: 4.5
            }
        },
        legend: {
            position: 'right'
        },
        tooltip: {
            format: {
                value: function (value, ratio, id) {
                    var format = id === 'Mean' ? d3.format(',') : d3.format('%');
                    return format(value);
                }
            }
        },
        bindto: '#chart7'
    })
}
window.addEventListener('load', function(){
    
    belonging = d3.select('#belonging')

    belonging.append('div').attr('id', 'chart1').attr('class', 'space-bottom4');
    belonging.append('div').attr('id', 'chart3').attr('class', 'space-bottom4');
    belonging.append('div').attr('id', 'chart4').attr('class', 'space-bottom4');
    belonging.append('div').attr('id', 'chart2').attr('class', 'space-bottom4');

    nonDisc = d3.select('#nonDisc')

    nonDisc.append('div').attr('id', 'chart5').attr('class', 'space-bottom4');
    nonDisc.append('div').attr('id', 'chart6').attr('class', 'space-bottom4');
    nonDisc.append('div').attr('id', 'chart7').attr('class', 'space-bottom4');
    
    createRaceChart();
    createYearChart();
    createSexOChart();
    createGenderChart();
    createRaceChart2();
    createSexOChart2();
    createGenderChart2();
})