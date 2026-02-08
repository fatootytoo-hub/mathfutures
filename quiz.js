function showResult() {
let score = 0;

if (q1.checked) score++;
if (q2.checked) score++;
if (q3.checked) score++;
if (q4.checked) score++;

let resultText = "";

if (score >= 3) {
resultText = "يناسبك تخصص الذكاء الاصطناعي وتحليل البيانات";
} else {
resultText = "قد تناسبك تخصصات تقنية أو إبداعية أخرى";
}

document.getElementById("result").innerText = resultText;
}
