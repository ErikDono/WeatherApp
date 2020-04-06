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
                localStorage.setItem(JSON("data", data))
            }

        }).then(function (response) {
            console.log(data)
            // pulling the city out of the data
            var baseOrig = JSON.parse(data.weatherdata.forecast.list[0])
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
            var dayOneBase = JSON.parse(data.weatherdata.forecast.list[1])
            // pulling data for second day
            var dayTwoBase = JSON.parse(data.weatherdata.forecast.list[2])
            // pulling data for third day
            var dayThreeBase = JSON.parse(data.weatherdata.forecast.list[3])
            // pulling data for fourth day
            var dayFourBase = JSON.parse(data.weatherdata.forecast.list[4])
            // pulling dat for fifth day
            var dayFiveBase = JSON.parse(data.weatherdata.forecast.list[5])

            // changing day 1 card
            var dayOneDate = dayOneBase.time.from
            $("dayOne").html(dayOneDate)
            var statusImageOne = dayOneBase.symbol
            $("statusImageOne").html(statusImageOne)
            var outOneTemp = dayOneBase.temperature.value
            $("dayOneTemp").html(outOneTemp)
            var outOneHum = dayOneBase.humidity.value
            $("dayOneHum").html(outOneHum)






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
    })
})
