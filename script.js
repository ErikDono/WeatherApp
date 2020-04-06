$(document).ready(function () {

    $("#inputButton").click(function () {
        event.preventDefault();
        console.log("hello");

        var cityInput = $("#userCity").val();
        if (cityInput != "") {
            console.log(cityInput)
            var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&units=imperial&appid=581a8ed6a835ab0d83c3cf64addfc4dc"

            $.ajax({
                url: queryURL,
                method: "GET",
                dataType: "jsonp",
                success: function (data) {
                    console.log(data)

                }

            }).then(function (response) {

            })

        } else {
            $("#error").html("Feild cannot be Empty")

        }

    })

    $("#newYork").on("click", function () {
        event.preventDefault()
        console.log("thebigapple")
        // pulling nyc from the api
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?lat=40.7143&lon=-74.006&units=imperial&appid=581a8ed6a835ab0d83c3cf64addfc4dc",
            method: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data)
                localStorage.setItem("data", data)
                // i dont think the above works... sadly... im going to continue as if it does.
            }

        }).then(function (response) {
            console.log(data)
            // pulling the city out of the data
            var baseOrig = localStorage.getItem(JSON.parse(data.weatherdata.forecast.list[0]))
            var cityOut = baseOrig.location.name
            // changing the city inner html
            $("#city").html(cityOut)
            // pulling date
            var dateOut = baseOrig.time.from
            $("#date").html(dateOut)
            //pull temp
            var tempOut = baseOrig.temperature.value
            // changing temp
            $("currentTemp").html(tempOut)
            // pulling humiditiy
            var humOut = baseOrig.humidity.value
            // changing humidity
            $("currentHum").html(humOut)
            // pull wind
            var windOut = baseOrig.windSpeed.name
            // changing wind
            $("currentWind").html(windOut)

            // pulling data for the first day
            var dayOneBase = localStorage.getItem(JSON.parse(data.weatherdata.forecast.list[1]))
            // pulling data for second day
            var dayTwoBase = localStorage.getItem(JSON.parse(data.weatherdata.forecast.list[2]))
            // pulling data for third day
            var dayThreeBase = localStorage.getItem(JSON.parse(data.weatherdata.forecast.list[3]))
            // pulling data for fourth day
            var dayFourBase = localStorage.getItem(JSON.parse(data.weatherdata.forecast.list[4]))
            // pulling dat for fifth day
            var dayFiveBase = localStorage.getItem(JSON.parse(data.weatherdata.forecast.list[5]))

            // changing day 1 card
            var dayOneDate = dayOneBase.time.from
            $("dayOne").html(dayOneDate)
            var outImageOne = dayOneBase.symbol
            $("statusImageOne").html(outImageOne)
            var outOneTemp = dayOneBase.temperature.value
            $("dayOneTemp").html(outOneTemp)
            var outOneHum = dayOneBase.humidity.value
            $("dayOneHum").html(outOneHum)

            // chanigng day 2 card
            var dayTwoOut = dayTwoBase.time.from
            $("dayTwo").html(dayTwoOut)
            var outImageTwo = dayTwoBase.symbol
            $("statusImageTwo").html(outImageTwo)
            var outTwoTemp = dayTwoBase.temperature.value
            $("dayTwoTemp").html(outTwoTemp)
            var outTwoHum = dayTwoBase.humidity.value
            $("dayTwoHum").html(outTwoHum)

            // changing day 3 card 
            var dayThreeOut = dayThreeBase.time.from
            $("dayThree").html(dayThreeOut)
            var outImageThree = dayThreeBase.symbol
            $("statusImageThree").html(outImagethree)
            var outThreeTemp = dayTwoBase.temperature.value
            $("dayThreeTemp").html(outThreeTemp)
            var outThreeHum = dayTwoBase.humidity.value
            $("dayThreeHum").html(outThreeHum)

            // changing day 4 card 
            var dayFourOut = dayFourBase.time.from
            $("dayFour").html(dayFourOut)
            var outImageFour = dayFourBase.symbol
            $("statusImageFour").html(outImageFour)
            var outFourTemp = dayFourBase.temperature.value
            $("dayFourTemp").html(outFourTemp)
            var outFourHum = dayFourBase.humidity.value
            $("dayFourHum").html(outFourHum)

            // changing day 5 card

            var dayFiveOut = dayFiveBase.time.from
            $("dayFive").html(dayFiveOut)
            var outFiveTwo = dayFiveBase.symbol
            $("statusImageFive").html(outImageFive)
            var outFiveTemp = dayFiveBase.temperature.value
            $("dayFiveTemp").html(outFiveTemp)
            var outFiveHum = dayFiveBase.humidity.value
            $("dayFiveHum").html(outFiveHum)






        })

    })
    $("#philly").on("click", function () {
        event.preventDefault()
        console.log("Philly Jawn")
        // pulling Phillty from the API
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=Philadelphia,PA,USA&appid=581a8ed6a835ab0d83c3cf64addfc4dc",
            method: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data)
            }
        })


    })
    $("#amsterdam").on("click", function () {
        event.preventDefault()
        console.log("DePijp")
        // pulling Amsterdam from the API
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=Amsterdam,NL&appid=581a8ed6a835ab0d83c3cf64addfc4dc",
            method: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data)
            }
        })

    })
    $("#denver").on("click", function () {
        event.preventDefault()
        console.log("Colarararara")
        // pulling Denver from the API
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=Denver,CO,USA&appid=581a8ed6a835ab0d83c3cf64addfc4dc",
            method: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data)
            }
        })

    })
    $("#sanFran").on("click", function () {
        event.preventDefault()
        console.log("Cisco Kid!")
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast?q=San+Francisco,CA,USA&appid=581a8ed6a835ab0d83c3cf64addfc4dc",
            method: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data)
            }

        })




        // im realzing last minute that these were supposed to be based off search history, and not random cities that i like... doh... 
        // in order to do that, i would have set the local storage items to an aray, and used a for loop to iterate through.
        //  I would set this equal to a var, which woudl then .html append onto the ul div that i currently have.  


    })
})
