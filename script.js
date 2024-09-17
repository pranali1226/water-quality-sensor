

const chlorineData = [0.4, 0.7, 0.6, 0.9, 1.2, 0.8, 1.1]; 
const silverData = [0.05, 0.1, 0.2, 0.25, 0.35, 0.4, 0.45]; 
const ecoliData = [0, 10, 20, 40, 55, 65, 80]; 

const labels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'];

function drawChart(ctx, data, label, hazardLevels) {
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderColor: 'black', 
                backgroundColor: 'rgba(0, 0, 0, 0.1)', 
                fill: true,
                borderWidth: 3,  
                pointBorderWidth: 2,  
                pointRadius: 4  
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: 'white',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'white',
                        lineWidth: 2.5  
                    }
                },
                x: {
                    ticks: {
                        color: 'white',
                        font: {
                            size: 14,
                            weight: 'bold'
                        }
                    },
                    grid: {
                        color: 'rgba(255, 255, 255, 0.2)',
                        lineWidth: 2.5  
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: 'white',
                        font: {
                            size: 16,
                            weight: 'bold'
                        }
                    }
                },
                annotation: {
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: hazardLevels.drinkable,
                            yMax: hazardLevels.drinkable,
                            borderColor: 'green',  
                            borderWidth: 2,  
                            label: {
                                content: 'Drinkable',
                                enabled: true,
                                position: 'end',
                                color: 'green',
                                font: {
                                    size: 14,
                                    weight: 'bold'
                                }
                            }
                        },
                        line2: {
                            type: 'line',
                            yMin: hazardLevels.medium,
                            yMax: hazardLevels.medium,
                            borderColor: 'yellow',  
                            borderWidth: 2,  
                            label: {
                                content: 'Medium',
                                enabled: true,
                                position: 'end',
                                color: 'yellow',
                                font: {
                                    size: 14,
                                    weight: 'bold'
                                }
                            }
                        },
                        line3: {
                            type: 'line',
                            yMin: hazardLevels.hazardous,
                            yMax: hazardLevels.hazardous,
                            borderColor: 'red',  
                            borderWidth: 2,  
                            label: {
                                content: 'Hazardous',
                                enabled: true,
                                position: 'end',
                                color: 'red',
                                font: {
                                    size: 14,
                                    weight: 'bold'
                                }
                            }
                        }
                    }
                }
            }
        }
    });
}


drawChart(document.getElementById('chlorineChart').getContext('2d'), chlorineData, 'Chlorine Level (ppm)', 
          {drinkable: 0.5, medium: 1.0, hazardous: 1.5});


drawChart(document.getElementById('silverChart').getContext('2d'), silverData, 'Silver Ion Level (ppm)', 
          {drinkable: 0.1, medium: 0.3, hazardous: 0.5});


drawChart(document.getElementById('ecoliChart').getContext('2d'), ecoliData, 'E. coli Level (CFU/mL)', 
          {drinkable: 0, medium: 50, hazardous: 100});
