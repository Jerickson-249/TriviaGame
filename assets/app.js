$(document).ready(function(){

        questions:  {
            question 1: 'What were Lukes aunt and uncles job on Tatooine?',
            question 2: 'In how many languages is C3P0 fluent?',
            question 3: 'What is the Wookies home world?',
            question 4: 'In the cantina, who shot first?',
            question 5: 'Which character is partially named after George Lucas son?',
            question 6: 'In which movie does the camera pan back up after the crawl in the begining of the movie?',
            question 7: 'Which species stole the plans to the Death Star?',
            question 8: 'Who kissed Leia first?'
        },
        options: {
            question 1: ['Nature watchers', 'moisture farmers', 'bounty hunters'],
            question 2: ['1 million', '2 million', '4 million', '6 million'],
            question 3: ['Alderann', 'Endor', 'Naboo', 'Kashyyk'],
            question 4: ['Greedo, Chewbacca', 'Han Solo', 'Luke Skywalker'],
            question 5: ['Obi Wan Kenobi', 'Anakin Skywalker', 'Dexter Jettser'],
            question 6: ['I', 'II', 'III', 'VI'],
            question 7: ['Ewoks', 'Gunggans', 'Bothans', 'Jedi'],
            question 8: ['Luke', 'Han', 'Obi Wan Kenobi', 'Jabba the Hut']
        },

        answers: {
            question 1: 'moisture farmers',
            question 2: 'G million',
            question 3:  "Kashyyk",
            question 4:  'HanSolo',
            question 5: 'Dexter Jettser',
            question 6: 'III: Attack of the Clones',
            question 7: 'Bothans',
            question 8: 'Luke'
        },
    }

var trivia = {
    
    right = 0,
    wrong = 0,
    unaswered = 0,
    currentSet = 0,
    timer: 20,
    timerOn: false,
    timerId: '',

startGame: function(){
    trivia.unanswered = 0;
    trivia.right = 0;
    trivia.wrong = 0;
    trivia.currentSet - 0;
    clearInterval(trivia.timerId);
}    

NextQuestion : function(){
    trivia.timer = 30;


}
}
