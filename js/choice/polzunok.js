const priceRangeInput = document.querySelectorAll(".price-range-input input"),
    priceInput = document.querySelectorAll(".price-input input"),
    priceRange = document.querySelector(".price-slider .progress");

const lengthRangeInput = document.querySelectorAll(".length-range-input input"),
    lengthInput = document.querySelectorAll(".length-input input"),
    lengthRange = document.querySelector(".length-slider .progress");

const bladeLengthRangeInput = document.querySelectorAll(".blade-length-range-input input"),
    bladeLengthInput = document.querySelectorAll(".blade-length-input input"),
    bladeLengthRange = document.querySelector(".blade-length-slider .progress");

const bladeWidthRangeInput = document.querySelectorAll(".blade-width-range-input input"),
    bladeWidthInput = document.querySelectorAll(".blade-width-input input"),
    bladeWidthRange = document.querySelector(".blade-width-slider .progress");

function changePrice(range, num, progress) {
    let priceGap = 10;

    num.forEach(input => {
        input.addEventListener("input", e => {
            let minPrice = parseInt(num[0].value),
                maxPrice = parseInt(num[1].value);

            if ((maxPrice - minPrice >= priceGap) && maxPrice <= range[1].max) {
                if (e.target.className === "input-min") {
                    range[0].value = minPrice;
                    progress.style.left = ((minPrice / range[0].max) * 100) + "%";
                } else {
                    range[1].value = maxPrice;
                    progress.style.right = 100 - (maxPrice / range[1].max) * 100 + "%";
                }
            }
        });
    });

    range.forEach(input => {
        input.addEventListener("input", e => {
            let minVal = parseInt(range[0].value),
                maxVal = parseInt(range[1].value);

            if ((maxVal - minVal) < priceGap) {

                if (e.target.className === "range-min") {
                    range[0].value = maxVal - priceGap
                } else {
                    range[1].value = minVal + priceGap;
                }

            } else {
                num[0].value = minVal;
                num[1].value = maxVal;
                progress.style.left = ((minVal / range[0].max) * 100) + "%";
                progress.style.right = 100 - (maxVal / range[1].max) * 100 + "%";
            }
        });
    });
}

changePrice(priceRangeInput, priceInput, priceRange)
changePrice(lengthRangeInput, lengthInput, lengthRange)
changePrice(bladeLengthRangeInput, bladeLengthInput, bladeLengthRange)
changePrice(bladeWidthRangeInput, bladeWidthInput, bladeWidthRange)