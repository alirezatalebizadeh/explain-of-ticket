
let countrySelectInput = document.querySelector('.countrySelect')
let citySelectInput = document.querySelector('.citySelect')

let countryDetail = {
    Iran: ['بوشهر', 'یزد', 'اصفهان', 'کرج', 'تهران', 'یاسوج', 'کرمان', 'کرمانشاه'],
    Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
    US: ["Los Angles", "San Diego", "Chicago"]
}

function showDetail(listCountryArray) {

    let domCountryCity = listCountryArray.map(country => {
        return `<option class="option" value="Iran">${country}</option>`
    }).join('')
    insertDetail(domCountryCity)
}

function insertDetail(domCountryCity) {
    citySelectInput.innerHTML = ''
    citySelectInput.insertAdjacentHTML('beforeend', `${domCountryCity}`)
}

function chooseCountry() {

    let valueCountryInput = countrySelectInput.value

    if (valueCountryInput == 'Please Select') {
        citySelectInput.innerHTML = '<option>Select City ...</option>'
    } else if (countryDetail[valueCountryInput]) {
        showDetail(countryDetail[valueCountryInput])
    }
}



countrySelectInput.addEventListener('change', chooseCountry)

