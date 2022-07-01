let transform = (arr) => {

    let toCurrency = num =>  num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " €";

    let ans = [];
    for(let obj of arr) {
        if(obj.price) {

            let mapped = {}
            let savings = obj["savings"];
            let price = obj["price"];
            let savingsType = obj["savingsType"];
            let kind = obj["kind"];

            

            if(savingsType == "percent") {
                savings = obj["price"]*savings/100
            }

            mapped["basePrice"] = toCurrency(price);
            mapped["description"] = `You are saving ${toCurrency(savings)} related to the initial price`
            mapped["price"] = toCurrency(price - savings);
            
            if(savingsType === "percent"){
                mapped["savings"] = obj["savings"] + " %";
            } else {
                mapped["savings"] = toCurrency(savings)
            }

            if(kind === "sales"){
                mapped["title"] = "Sales"
            } else if(kind === "reductionVoucher") {
                mapped["title"] = "Flat voucher"
            }

            console.log(mapped)

        }
    }
}

const input = [
    {
    price: 3000,
    kind: 'reductionVoucher',
    savings: 300,
    savingsType: 'total',
    },
    {
    price: undefined,
    kind: 'sales',
    savings: 10,
    savingsType: 'percent',
    },
    {
    price: 3000,
    kind: 'sales',
    savings: 15,
    savingsType: 'percent',
    }
    ]

transform(input)

