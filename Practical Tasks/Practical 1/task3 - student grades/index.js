function calculate() {
    const numberOfStudents = 3
    for(let student = 1; student <= numberOfStudents; student++) {
        const numberOfScores = 3;
        let sum = 0;
        for (let score = 1; score <= numberOfScores; score++) {
            sum += parseInt(document.getElementById(`score-${student}-${score}`).innerHTML);
        }
        document.getElementById(`score-${student}-total`).innerHTML = sum;
        document.getElementById(`score-${student}-avg`).innerHTML = (sum/numberOfScores).toFixed(2);
    }
}