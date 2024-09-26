const apiKey = 'd27624dd12a549c8b5a8a0cc6e043a49'; // Dein neuer API-Schlüssel von Open Exchange Rates
const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${apiKey}`;
const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const resultDisplay = document.getElementById('result');
const historyList = document.getElementById('historyList');
const convertBtn = document.getElementById('convertBtn');
const switchBtn = document.getElementById('switchBtn');
const favoritesList = document.getElementById('favoritesList');
const favoritesBtn = document.getElementById('favoritesBtn');
const favoritesPopup = document.getElementById('favoritesPopup');
const closePopup = document.querySelectorAll('.close')[0];
const instructionsBtn = document.getElementById('instructionsBtn');
const instructionsPopup = document.getElementById('instructionsPopup');
const instructionsClose = document.querySelectorAll('.close')[1];
const darkModeToggle = document.getElementById('darkModeToggle');
const chartContext = document.getElementById('currencyChart').getContext('2d');
let currencyRates = {};
let currencyChart;

// Währungsnamen hinzufügen
const currencyNames = {
    "AED": "United Arab Emirates Dirham",
    "AFN": "Afghan Afghani",
    "ALL": "Albanian Lek",
    "AMD": "Armenian Dram",
    "ANG": "Netherlands Antillean Guilder",
    "AOA": "Angolan Kwanza",
    "ARS": "Argentine Peso",
    "AUD": "Australian Dollar",
    "AWG": "Aruban Florin",
    "AZN": "Azerbaijani Manat",
    "BAM": "Bosnia-Herzegovina Convertible Mark",
    "BBD": "Barbadian Dollar",
    "BDT": "Bangladeshi Taka",
    "BGN": "Bulgarian Lev",
    "BHD": "Bahraini Dinar",
    "BIF": "Burundian Franc",
    "BMD": "Bermudian Dollar",
    "BND": "Brunei Dollar",
    "BOB": "Bolivian Boliviano",
    "BRL": "Brazilian Real",
    "BSD": "Bahamian Dollar",
    "BTN": "Bhutanese Ngultrum",
    "BWP": "Botswana Pula",
    "BYN": "Belarusian Ruble",
    "BZD": "Belize Dollar",
    "CAD": "Canadian Dollar",
    "CDF": "Congolese Franc",
    "CHF": "Swiss Franc",
    "CLP": "Chilean Peso",
    "CNY": "Chinese Yuan",
    "COP": "Colombian Peso",
    "CRC": "Costa Rican Colón",
    "CUC": "Cuban Convertible Peso",
    "CUP": "Cuban Peso",
    "CVE": "Cape Verdean Escudo",
    "CZK": "Czech Koruna",
    "DJF": "Djiboutian Franc",
    "DKK": "Danish Krone",
    "DOP": "Dominican Peso",
    "DZD": "Algerian Dinar",
    "EGP": "Egyptian Pound",
    "ERN": "Eritrean Nakfa",
    "ETB": "Ethiopian Birr",
    "EUR": "Euro",
    "FJD": "Fijian Dollar",
    "FKP": "Falkland Islands Pound",
    "FOK": "Faroese Króna",
    "GBP": "British Pound Sterling",
    "GEL": "Georgian Lari",
    "GGP": "Guernsey Pound",
    "GHS": "Ghanaian Cedi",
    "GIP": "Gibraltar Pound",
    "GMD": "Gambian Dalasi",
    "GNF": "Guinean Franc",
    "GTQ": "Guatemalan Quetzal",
    "GYD": "Guyanese Dollar",
    "HKD": "Hong Kong Dollar",
    "HNL": "Honduran Lempira",
    "HRK": "Croatian Kuna",
    "HTG": "Haitian Gourde",
    "HUF": "Hungarian Forint",
    "IDR": "Indonesian Rupiah",
    "ILS": "Israeli New Shekel",
    "IMP": "Isle of Man Pound",
    "INR": "Indian Rupee",
    "IQD": "Iraqi Dinar",
    "IRR": "Iranian Rial",
    "ISK": "Icelandic Króna",
    "JEP": "Jersey Pound",
    "JMD": "Jamaican Dollar",
    "JOD": "Jordanian Dinar",
    "JPY": "Japanese Yen",
    "KES": "Kenyan Shilling",
    "KGS": "Kyrgyzstani Som",
    "KHR": "Cambodian Riel",
    "KID": "Kiribati Dollar",
    "KMF": "Comorian Franc",
    "KRW": "South Korean Won",
    "KWD": "Kuwaiti Dinar",
    "KYD": "Cayman Islands Dollar",
    "KZT": "Kazakhstani Tenge",
    "LAK": "Lao Kip",
    "LBP": "Lebanese Pound",
    "LKR": "Sri Lankan Rupee",
    "LRD": "Liberian Dollar",
    "LSL": "Lesotho Loti",
    "LYD": "Libyan Dinar",
    "MAD": "Moroccan Dirham",
    "MDL": "Moldovan Leu",
    "MGA": "Malagasy Ariary",
    "MKD": "Macedonian Denar",
    "MMK": "Burmese Kyat",
    "MNT": "Mongolian Tögrög",
    "MOP": "Macanese Pataca",
    "MRU": "Mauritanian Ouguiya",
    "MUR": "Mauritian Rupee",
    "MVR": "Maldivian Rufiyaa",
    "MWK": "Malawian Kwacha",
    "MXN": "Mexican Peso",
    "MYR": "Malaysian Ringgit",
    "MZN": "Mozambican Metical",
    "NAD": "Namibian Dollar",
    "NGN": "Nigerian Naira",
    "NIO": "Nicaraguan Córdoba",
    "NOK": "Norwegian Krone",
    "NPR": "Nepalese Rupee",
    "NZD": "New Zealand Dollar",
    "OMR": "Omani Rial",
    "PAB": "Panamanian Balboa",
    "PEN": "Peruvian Sol",
    "PGK": "Papua New Guinean Kina",
    "PHP": "Philippine Peso",
    "PKR": "Pakistani Rupee",
    "PLN": "Polish Złoty",
    "PYG": "Paraguayan Guaraní",
    "QAR": "Qatari Riyal",
    "RON": "Romanian Leu",
    "RSD": "Serbian Dinar",
    "RUB": "Russian Ruble",
    "RWF": "Rwandan Franc",
    "SAR": "Saudi Riyal",
    "SBD": "Solomon Islands Dollar",
    "SCR": "Seychellois Rupee",
    "SDG": "Sudanese Pound",
    "SEK": "Swedish Krona",
    "SGD": "Singapore Dollar",
    "SHP": "Saint Helena Pound",
    "SLL": "Sierra Leonean Leone",
    "SOS": "Somali Shilling",
    "SRD": "Surinamese Dollar",
    "SSP": "South Sudanese Pound",
    "STN": "São Tomé and Príncipe Dobra",
    "SYP": "Syrian Pound",
    "SZL": "Eswatini Lilangeni",
    "THB": "Thai Baht",
    "TJS": "Tajikistani Somoni",
    "TMT": "Turkmenistani Manat",
    "TND": "Tunisian Dinar",
    "TOP": "Tongan Paʻanga",
    "TRY": "Turkish Lira",
    "TTD": "Trinidad and Tobago Dollar",
    "TVD": "Tuvaluan Dollar",
    "TWD": "New Taiwan Dollar",
    "TZS": "Tanzanian Shilling",
    "UAH": "Ukrainian Hryvnia",
    "UGX": "Ugandan Shilling",
    "USD": "United States Dollar",
    "UYU": "Uruguayan Peso",
    "UZS": "Uzbekistani Som",
    "VES": "Venezuelan Bolívar",
    "VND": "Vietnamese Đồng",
    "VUV": "Vanuatu Vatu",
    "WST": "Samoan Tālā",
    "XAF": "Central African CFA Franc",
    "XCD": "East Caribbean Dollar",
    "XOF": "West African CFA Franc",
    "XPF": "CFP Franc",
    "YER": "Yemeni Rial",
    "ZAR": "South African Rand",
    "ZMW": "Zambian Kwacha",
    "ZWL": "Zimbabwean Dollar"
};

// API-Daten laden und Dropdown-Menü füllen
async function loadCurrencies() {
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error(`Fehler: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        console.log('API-Response:', data);

        if (data && data.rates) {
            currencyRates = data.rates;
            const currencies = Object.keys(currencyRates);

            // Dropdown-Menüs füllen und Währungscode + Name anzeigen
            fromCurrency.innerHTML = '';
            toCurrency.innerHTML = '';

            currencies.forEach(currency => {
                const optionFrom = document.createElement('option');
                const optionTo = document.createElement('option');

                // Währungsname einfügen
                const currencyDisplay = `${currency} - ${currencyNames[currency] || 'Unbekannte Währung'}`;

                optionFrom.value = currency;
                optionTo.value = currency;
                optionFrom.textContent = currencyDisplay;
                optionTo.textContent = currencyDisplay;

                fromCurrency.appendChild(optionFrom);
                toCurrency.appendChild(optionTo);
            });

            console.log('Währungen erfolgreich hinzugefügt:', currencies);

        } else {
            throw new Error('Fehler: Ungültige API-Daten erhalten.');
        }
    } catch (error) {
        console.error('Fehler beim Abrufen der Währungsdaten:', error);
    }
}

// Die restlichen Funktionen wie gehabt...


// Dark Mode umschalten
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Umrechnung durchführen
function convertCurrency() {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount === "" || from === "" || to === "") {
        alert("Bitte füllen Sie alle Felder aus.");
        return;
    }

    const rate = currencyRates[to] / currencyRates[from];
    const result = (amount * rate).toFixed(2);
    resultDisplay.textContent = `${result} ${to}`;

    // Diagramm aktualisieren
    updateChart(from, to, rate);

    // Verlauf hinzufügen
    addHistory(amount, from, to, result);
}

// Diagramm aktualisieren
function updateChart(from, to, rate) {
    const chartData = {
        labels: [from, to],
        datasets: [{
            label: 'Wechselkurs',
            data: [1, rate],
            backgroundColor: ['#4caf50', '#FF7043'],
            borderColor: ['#388E3C', '#E64A19'],
            borderWidth: 1
        }]
    };

    if (currencyChart) {
        currencyChart.destroy(); // Altes Diagramm zerstören, wenn es bereits existiert
    }

    currencyChart = new Chart(chartContext, {
        type: 'bar',
        data: chartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Verlauf speichern (maximal 5 Einträge)
function addHistory(amount, from, to, result) {
    const listItem = document.createElement('li');
    const star = document.createElement('span');
    star.classList.add('star');
    star.innerHTML = '&#9734;'; // Leerer Stern (☆)

    // Klickfunktion für den Stern (Favorit hinzufügen)
    star.addEventListener('click', () => {
        star.classList.toggle('filled'); // Stern ausfüllen oder leeren
        if (star.classList.contains('filled')) {
            addFavorite(amount, from, to, result);
        }
    });

    listItem.innerHTML = `${amount} ${from} = ${result} ${to}`;
    listItem.prepend(star);

    // Entfernen-Button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Entfernen';
    removeBtn.classList.add('remove');
    removeBtn.addEventListener('click', () => removeHistory(removeBtn));

    listItem.appendChild(removeBtn);

    // Verlauf auf maximal 5 Einträge begrenzen
    if (historyList.children.length >= 5) {
        historyList.removeChild(historyList.lastChild); // Älteste Umrechnung entfernen
    }

    // Neueste Umrechnung an den Anfang der Liste setzen
    historyList.insertBefore(listItem, historyList.firstChild);
}

// Verlauf entfernen
function removeHistory(button) {
    const li = button.parentElement;
    historyList.removeChild(li);
}

// Favorit speichern
function addFavorite(amount, from, to, result) {
    const listItem = document.createElement('li');
    listItem.textContent = `${amount} ${from} = ${result} ${to}`;

    // Entfernen-Button für Favoriten (rotes Kreuz)
    const removeFavBtn = document.createElement('button');
    removeFavBtn.textContent = '✖';
    removeFavBtn.classList.add('remove-favorite');
    removeFavBtn.addEventListener('click', () => {
        favoritesList.removeChild(listItem); // Favorit entfernen
    });

    listItem.appendChild(removeFavBtn);
    favoritesList.appendChild(listItem);
}

// Favoriten-Popup öffnen und schließen
favoritesBtn.addEventListener('click', () => {
    favoritesPopup.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    favoritesPopup.style.display = 'none';
});

// Anleitung-Popup öffnen und schließen
instructionsBtn.addEventListener('click', () => {
    instructionsPopup.style.display = 'block';
});

instructionsClose.addEventListener('click', () => {
    instructionsPopup.style.display = 'none';
});

// Funktion zum Wechseln der Währungen (Switch Button)
switchBtn.addEventListener('click', () => {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
});

// Seite lädt die Währungen beim Start
window.addEventListener('load', () => {
    loadCurrencies();
});

convertBtn.addEventListener('click', convertCurrency);
