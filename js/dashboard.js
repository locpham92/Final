function showProfile() {
    let profile = document.querySelector(".profile");
    profile.style.display = 'block';
    // document.addEventListener('click', function (event) {
    //     if (!profile.contains(event.target)) {
    //         profile.style.display = 'none';
    //     }
    // })
}
function closeProfile() {
    let profile = document.querySelector(".profile");
    profile.style.display = 'none';
}
function dayChart() {
    let dayChart = document.querySelector(".day-btn");
    dayChart.style = 'background-color: #fdfdfd';
    let weekChart = document.querySelector(".week-btn");
    weekChart.style = 'background-color: transparent';
    let monthChart = document.querySelector(".month-btn");
    monthChart.style = 'background-color: transparent';
    let chart = document.getElementById('myBarChart').getContext('2d');
    let myBarChart = new Chart(chart, {
        type: 'bar',
        data: {
            labels: ['01', '02', '03', '04', '05', '06', '07'],
            datasets: [{
                label: 'Chi phí',
                data: [1, 2, 3,4, 5, 6, 7],
                backgroundColor: 'rgba(75, 192, 192, 0.9)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
function weekChart() {
    myBarChart.destroy();
    let dayChart = document.querySelector(".day-btn");
    dayChart.style = 'background-color: transparent';
    let weekChart = document.querySelector(".week-btn");
    weekChart.style = 'background-color: #fdfdfd';
    let monthChart = document.querySelector(".month-btn");
    monthChart.style = 'background-color: transparent';
    let chart = document.getElementById('myBarChart').getContext('2d');
    let myBarChart = new Chart(chart, {
        type: 'bar',
        data: {
            labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'],
            datasets: [{
                label: 'Chi phí',
                data: [1, 2, 3,4, 5, 6, 7],
                backgroundColor: 'rgba(75, 192, 192, 0.9)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
function monthChart() {
    let dayChart = document.querySelector(".day-btn");
    dayChart.style = 'background-color: transparent';
    let weekChart = document.querySelector(".week-btn");
    weekChart.style = 'background-color: transparent';
    let monthChart = document.querySelector(".month-btn");
    monthChart.style = 'background-color: #fdfdfd';
    let chart = document.getElementById('myBarChart').getContext('2d');
    let myBarChart = new Chart(chart, {
        type: 'bar',
        data: {
            labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
            datasets: [{
                label: 'Chi phí',
                data: [1, 2, 3,4, 5, 6, 7],
                backgroundColor: 'rgba(75, 192, 192, 0.9)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
balance();
function balance() {
    let balance = 923214330;
    console.log(balance);
    document.getElementById("total-value").innerHTML = formatCurrency(balance, "đ");

}
function formatCurrency(value, currencySymbol) {
    return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + "  " + currencySymbol;
}

function hideBalance() {
    console.log(1);
    let eyeslash = document.querySelector(".overview .total-balance .total-value .eye");
    eyeslash.style.display = block;
    let eye = document.querySelector(".eye");
    eye.style.display = none;
    document.getElementById('total-value').innerHTML = "***********";
}

