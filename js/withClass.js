
let countryDetail = {
    Iran: ['بوشهر', 'یزد', 'اصفهان', 'کرج', 'تهران', 'یاسوج', 'کرمان', 'کرمانشاه'],
    Turkey: ["Istanbul", "Ezmir", "Ankara", "Antaliya"],
    US: ["Los Angles", "San Diego", "Chicago"]
}

class weather {
    constructor() {
        this.countrySelectInput = document.querySelector('.countrySelect')
        this.citySelectInput = document.querySelector('.citySelect')

        this.render()

    }


    render() {
        console.log('rendering');
        this.countrySelectInput.addEventListener('change', () => {
            this.chooseCountry()
        })

    }

    chooseCountry() {
        let valueCountryInput = this.countrySelectInput.value

        if (valueCountryInput == 'Please Select') {
            this.citySelectInput.innerHTML = '<option>Select City ...</option>'
        } else if (countryDetail[valueCountryInput]) {
            this.showDetail(countryDetail[valueCountryInput])
        }
    }

    showDetail(listCountryArray) {

        let domCountryCity = listCountryArray.map(country => {
            return `<option class="option" value="Iran">${country}</option>`
        }).join('')
        this.insertDetail(domCountryCity)
    }

    insertDetail(domCountryCity) {
        this.citySelectInput.innerHTML = ''
        this.citySelectInput.insertAdjacentHTML('beforeend', `${domCountryCity}`)
    }

}





new weather()







