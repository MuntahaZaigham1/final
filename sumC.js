module.exports.nothing7 = function(req, res) {
    res.render("paymentsummary.html", {
        date1 :"21-oct-2018",
        class1:"goldplus",
        sum1:
        [
            {
            
            movieN:"venom",
            quantity:2,
            price:13,
            total:26
            },
            {
                
                movieN:"taare zameen par",
                quantity:1,
                price:8,
                total:8
            }


        ]
        
        
    });
};