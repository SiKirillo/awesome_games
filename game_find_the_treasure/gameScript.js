let getRandomNumber = function (size) {
    return Math.floor(Math.random() * size);
};

let getDistance = function (event, target) {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2));
};

let getDistanceHint = function (distance) {
    let previousDistanceColor = distanceColor.attr("class");
    if (distance < 10) {
        $(distanceColor).each(function () {
            distanceColor = $(this).removeClass(previousDistanceColor).addClass("distance_near");
        });
        return "Обожжёшься!";
    } else if (distance < 20) {
        $(distanceColor).each(function () {
            distanceColor = $(this).removeClass(previousDistanceColor).addClass("distance_very_close");
        });
        return "Очень горячо!";
    } else if (distance < 40) {
        $(distanceColor).each(function () {
            distanceColor = $(this).removeClass(previousDistanceColor).addClass("distance_close");
        });
        return "Горячо!";
    } else if (distance < 80) {
        $(distanceColor).each(function () {
            distanceColor = $(this).removeClass(previousDistanceColor).addClass("distance_closely");
        });
        return "Тепло!";
    } else if (distance < 160) {
        $(distanceColor).each(function () {
            distanceColor = $(this).removeClass(previousDistanceColor).addClass("distance_far_away");
        });
        return "Холодно!";
    } else if (distance < 320) {
        $(distanceColor).each(function () {
            distanceColor = $(this).removeClass(previousDistanceColor).addClass("distance_very_far_away");
        });
        return "Очень холодно!";
    } else {
        $(distanceColor).each(function () {
            distanceColor = $(this).removeClass(previousDistanceColor).addClass("distance_north_pole");
        });
        return "Северный полюс!";
    }
};

let gameSize = prompt("Выберите размер игрового поля или нажмите \"Отмена\" для выхода из игры:" + "\n"
    + "[М] маленькое - 400x400" + "\n"
    + "[С] среднее - 600x600" + "\n"
    + "[Б] большое - 800x800");

let height = 400;
let width = 400;
let clicks = 0;
let map = $("#map").attr("class", "map_small");
let distanceColor = $("#distance");

if (gameSize === null) {
    $(".container_play").css("display", "none");
    $(".container_stop").css("display", "block");
}

if (gameSize !== null) {
    gameSize = gameSize.toLowerCase();
    if (gameSize === "с") {
        height = 600;
        width = 600;
        $(map).each(function () {
            map = $(this).removeClass("map_small").addClass("map_medium");
        });
    } else if (gameSize === "б") {
        height = 800;
        width = 800;
        $(map).each(function () {
            map = $(this).removeClass("map_small").addClass("map_large");
        });
    }
}

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(height)
};

$(map).click(function (event) {
    clicks++;
    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);
    if (distance < 8) {
        alert("Клад найден! Сделано кликов: " + clicks);
    }
});