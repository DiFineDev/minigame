alert('Угадай число от 1 до 100');

game();

function game() {
    let hiddenNumber = Math.floor(Math.random() * 101);

    checkAnswer();

    function checkAnswer(){
        let userAnswer = getAnswer();
        
        if (userAnswer < hiddenNumber) {
            alert('Загаданное число больше');
            checkAnswer();
        }
        else if (userAnswer > hiddenNumber){
            alert('Загаданное число меньше');
            checkAnswer();
        }
        else if (+userAnswer === hiddenNumber){
            alert('Вы угадали число!');
        } else {
            alert('Игра окончена');
        }
    }

    function getAnswer(){
        let answer = prompt('Введите число');

        if (answer === null) {
            return;
        }
        else if (answer.trim() === ''){
            getAnswer();
        }
        else if (!isNaN(answer)) {
            return answer;        
        }
        else {
            getAnswer();
        }
    }
}