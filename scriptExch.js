//-----------------------DOM-------------------------
const amount = document.querySelector(".input")
amount.addEventListener("input", () => {
    amount.value = amount.value.replace(/[^0-9:]/g, "").slice(0,10)
})
const  exchange_rate= document.querySelector(".exchange-rate_text")
const selected_exchange = document.querySelectorAll(".Select select")
const from = document.querySelector(".from select")
const to = document.querySelector(".to select")
//console.log(selected_exchange);

//-----------variable---------------
let country_Code_list = {
"AED" : "AE",
"AFN" : "AF",
"XCD" : "AG",
"ALL" : "AL",
"AMD" : "AM",
"ANG" : "AN",
"AOA" : "AO",
"AQD" : "AQ",
"ARS" : "AR",
"AUD" : "AU",
"AZN" : "AZ",
"BAM" : "BA",
"BBD" : "BB",
"BDT" : "BD",
"XOF" : "BE",
"BGN" : "BG",
"BHD" : "BH",
"BIF" : "BI",
"BMD" : "BM",
"BND" : "BN",
"BOB" : "BO",
"BRL" : "BR",
"BSD" : "BS",
"NOK" : "BV",
"BWP" : "BW",
"BYR" : "BY",
"BZD" : "BZ",
"CAD" : "CA",
"CDF" : "CD",
"XAF" : "CF",
"CHF" : "CH",
"CLP" : "CL",
"CNY" : "CN",
"COP" : "CO",
"CRC" : "CR",
"CUP" : "CU",
"CVE" : "CV",
"CYP" : "CY",
"CZK" : "CZ",
"DJF" : "DJ",
"DKK" : "DK",
"DOP" : "DO",
"DZD" : "DZ",
"ECS" : "EC",
"EEK" : "EE",
"EGP" : "EG",
"ETB" : "ET",
"EUR" : "FR",
"FJD" : "FJ",
"FKP" : "FK",
"GBP" : "GB",
"GEL" : "GE",
"GGP" : "GG",
"GHS" : "GH",
"GIP" : "GI",
"GMD" : "GM",
"GNF" : "GN",
"GTQ" : "GT",
"GYD" : "GY",
"HKD" : "HK",
"HNL" : "HN",
"HRK" : "HR",
"HTG" : "HT",
"HUF" : "HU",
"IDR" : "ID",
"ILS" : "IL",
"INR" : "IN",
"IQD" : "IQ",
"IRR" : "IR",
"ISK" : "IS",
"JMD" : "JM",
"JOD" : "JO",
"JPY" : "JP",
"KES" : "KE",
"KGS" : "KG",
"KHR" : "KH",
"KMF" : "KM",
"KPW" : "KP",
"KRW" : "KR",
"KWD" : "KW",
"KYD" : "KY",
"KZT" : "KZ",
"LAK" : "LA",
"LBP" : "LB",
"LKR" : "LK",
"LRD" : "LR",
"LSL" : "LS",
"LTL" : "LT",
"LVL" : "LV",
"LYD" : "LY",
"MAD" : "MA",
"MDL" : "MD",
"MGA" : "MG",
"MKD" : "MK",
"MMK" : "MM",
"MNT" : "MN",
"MOP" : "MO",
"MRO" : "MR",
"MTL" : "MT",
"MUR" : "MU",
"MVR" : "MV",
"MWK" : "MW",
"MXN" : "MX",
"MYR" : "MY",
"MZN" : "MZ",
"NAD" : "NA",
"XPF" : "NC",
"NGN" : "NG",
"NIO" : "NI",
"NPR" : "NP",
"NZD" : "NZ",
"OMR" : "OM",
"PAB" : "PA",
"PEN" : "PE",
"PGK" : "PG",
"PHP" : "PH",
"PKR" : "PK",
"PLN" : "PL",
"PYG" : "PY",
"QAR" : "QA",
"RON" : "RO",
"RSD" : "RS",
"RUB" : "RU",
"RWF" : "RW",
"SAR" : "SA",
"SBD" : "SB",
"SCR" : "SC",
"SDG" : "SD",
"SEK" : "SE",
"SGD" : "SG",
"SKK" : "SK",
"SLL" : "SL",
"SOS" : "SO",
"SRD" : "SR",
"STD" : "ST",
"SVC" : "SV",
"SYP" : "SY",
"SZL" : "SZ",
"THB" : "TH",
"TJS" : "TJ",
"TMT" : "TM",
"TND" : "TN",
"TOP" : "TO",
"TRY" : "TR",
"TTD" : "TT",
"TWD" : "TW",
"TZS" : "TZ",
"UAH" : "UA",
"UGX" : "UG",
"USD" : "US",
"UYU" : "UY",
"UZS" : "UZ",
"VEF" : "VE",
"VND" : "VN",
"VUV" : "VU",
"YER" : "YE",
"ZAR" : "ZA",
"ZMK" : "ZM",
"ZWD" : "ZW"
}



document.addEventListener("click", (e) => {
    const click = e.target
    if(click.classList.contains("submit")){
      if(amount.value === "" || amount.value == "0"){
        alert("The input be empty field cannot be empty")
        amount.value = 1
      }else{
        ExChanges()  
      }

    }else if (click.classList.contains("reset")){
      console.log("btn reset");
      removeAll()
    }else if(click.classList.contains("icon-exchange") || click.classList.contains("exchange")){
        //console.log("change");
        let FROMCurr = from.value
        from.value = to.value
        to.value = FROMCurr
        flagCountry(from)
        flagCountry(to)
        ExChanges()     
    }
})


window.addEventListener("load", (e) => {

    for (let i = 0; i < selected_exchange.length; i++) {
for(currencyCode in country_Code_list){
//console.log(currencyCode);
let Tags = `<option value="${currencyCode}">${currencyCode}</option>`
selected_exchange[i].insertAdjacentHTML("beforeend", Tags)   
}
selected_exchange[i].addEventListener("change", (e) => {
flagCountry(e.target)
})   
};

})



function flagCountry(params) {
for(code in country_Code_list){
    if(code == params.value){
        let flags = params.parentElement.querySelector("img")
        flags.src = `https://flagsapi.com/${country_Code_list[code]}/flat/64.png`;

    }
}
}


function ExChanges(){
    const AmountVal = amount.value
    AmountVal.value = 1
    //console.log(AmountVal);
    
const apiKey = `569a6d39cc6e0ae3927e90fd`
let url = ` https://v6.exchangerate-api.com/v6/${apiKey}/latest/${from.value}`;

fetch(url).then(response => response.json()
).then(data => {
    //console.log(data);
    exchange_rate.innerHTML = `Getting exchange rate...`

    setTimeout(() => {
        const AmountTotal = Math.round(AmountVal * data.conversion_rates[to.value]).toFixed(2)
        exchange_rate.innerHTML = `${AmountVal} ${from.value} <span class="arrow">&#10137;</span> ${AmountTotal} ${to.value}`
    }, 2000);

}).catch((err) => {
    if(err){
        console.log("error moved", err.message);
        exchange_rate.innerHTML = `Error...`
        alert("Error", err.message)   
    }
})

};

function removeAll() {
        localStorage.clear();
       location.reload();
} 