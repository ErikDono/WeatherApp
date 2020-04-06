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
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/forecast?lat=40.7143&lon=-74.006&units=imperial&appid=581a8ed6a835ab0d83c3cf64addfc4dc",
            method: "GET",
            dataType: "jsonp",
            success: function (data) {
                console.log(data)
                localStorage.setItem(JSON("data", data)

            }

        }).then(function (response) {

        })

    })
    $("#philly").on("click", function () {
        event.preventDefault()
        console.log("Philly Jawn")


    })
    $("#amsterdam").on("click", function () {
        event.preventDefault()
        console.log("DePijp")

    })
    $("#denver").on("click", function () {
        event.preventDefault()
        console.log("Colarararara")

    })
    $("#sanFran").on("click", function () {
        event.preventDefault()
        console.log("Cisco Kid!")

    })

})
