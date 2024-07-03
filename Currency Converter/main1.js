const currencyRates = {
    USD: 1,
    EUR: 0.84,
    GBP: 0.76,
    JPY: 109.15,
    CNY: 6.93,
    AUD: 1.31,
    CAD: 1.29,
    CHF: 0.92,
    HKD: 7.85,
    INR: 74.83
};

document.getElementById('convert').addEventListener('click', convertCurrency);

function convertCurrency() {
    const amount = document.getElementById('oamount').value;
    const fromCurrency = document.getElementById('sel1').value;
    const toCurrency = document.getElementById('sel2').value;

    if (amount && fromCurrency && toCurrency) {
        const rate = currencyRates[toCurrency] / currencyRates[fromCurrency];
        const result = amount * rate;
        document.getElementById('result').innerHTML = ` ${result.toFixed(2)} ${toCurrency}`;
    }
}