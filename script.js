alert('Угадай число от 1 до 100');


function game() {

    let hiddenNumber = Math.floor(Math.random() * 101);
    let attempts = 10;
    
    function checkAnswer(){

        let userAnswer = getAnswer();
        
        if (attempts > 1) {
            if (userAnswer < hiddenNumber) {
                attempts--;
                alert(`Загаданное число больше, количество попыток: ${attempts}` );
                checkAnswer();
            }
            else if (userAnswer > hiddenNumber){
                attempts--;
                alert(`Загаданное число меньше, количество попыток: ${attempts}` );
                checkAnswer();
            }
            else if (+userAnswer === hiddenNumber){
                let nextGame = confirm('Вы угадали число! Хотите сыграть ещё?');
                if (nextGame) {
                    game();
                }
                alert('Спасибо за игру, хорошего дня!');
            } 
            else {
                alert('Игра окончена!');
            }
        } 
        else {
            let nextGame = confirm('Попытки закончились! Хотите сыграть ещё?');
            if (nextGame) {
                game();
            }
            alert('Спасибо за игру, хорошего дня!');
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

    checkAnswer();
}

game();