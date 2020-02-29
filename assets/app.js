$(document).ready(function () {

    var questions = {
        question1: 'What were Lukes aunt and uncles job on Tatooine?',
        question2: 'In how many languages is C3P0 fluent?',
        question3: 'What is the Wookies home world?',
        question4: 'In the cantina, who shot first?',
        question5: ' character is partially named after George Lucas son?',
        question6: 'In which movie does the camera pan back up after the crawl in the begining of the movie?',
        question7: 'Which species stole the plans to the Death Star?',
        question8: 'Who kissed Leia first?'
    }

    var options = {
        question1: ['Nature watchers', 'moisture farmers', 'bounty hunters'],
        question2: ['1 million', '2 million', '4 million', '6 million'],
        question3: ['Alderann', 'Endor', 'Naboo', 'Kashyyk'],
        question4: ['Greedo, Chewbacca', 'Han Solo', 'Luke Skywalker'],
        question5: ['Obi Wan Kenobi', 'Anakin Skywalker', 'Dexter Jettser'],
        question6: ['I', 'II', 'III', 'VI'],
        question7: ['Ewoks', 'Gunggans', 'Bothans', 'Jedi'],
        question8: ['Luke', 'Han', 'Obi Wan Kenobi', 'Jabba the Hut']
    }

    var answers = {
        question1: 'moisture farmers',
        question2: 'G million',
        question3: "Kashyyk",
        question4: 'HanSolo',
        question5: 'Dexter Jettser',
        question6: 'III: Attack of the Clones',
        question7: 'Bothans',
        question8: 'Luke'
    }

    var responses = {}
    var right = 0
    var wrong = 0
    var unaswered = 0
    var currentSet = 0
    var timer = 30
    var timerOn = false
    var timerId = ''
    $("#timer").text(timer)



    var startGame = function () {
        unanswered = 0;
        right = 0;
        wrong = 0;
        currentSet = 0;
        timer = 30

        clearInterval(timerId);
        // start the timer , every second call the function countdown
        timerId = setInterval(countdown, 1000)
        // show questions and answers
        showQuestions()
    }
    function countdown() {

        // reducing 1 the timer counter
        timer--
        // shot the info in the DOM
        $("#timer").text(timer)
        // verify if the time is out
        if (timer === 0) {
            // calculate the results
            results()
        }

    }
    var showQuestions = function () {
        for (key in questions) {
            var q = `<p>${questions[key]}</p>`
            $("#questions").append(q)

            var a = `<div id=${key}></div>`
            $("#questions").append(a)
            for (var i = 0; i < options[key].length; i++) {
                // console.log(options[key][i])
                var input = `<input class="clickBtn" name=${key} type="radio" question=${key} index=${i}>${options[key][i]}`
                $("#" + key).append(input)
            }
        }

        $(".clickBtn").on("click", function () {
            // every time a radio button is clicked we store the info inside of the button index and question
            console.log(this)
            var question = $(this).attr("question")
            var index = $(this).attr("index")
            responses[question] = index
            console.log(responses)
        })
    }

    // activate the timmer and verify if the timer === do the same if they clicked finish
    $("#finish").on("click", function () {
        event.preventDefault()
        results()
    })

    function results() {
        clearInterval(timerId)
        // verify the responses with the array of responses comparing with the array of answers
        for (key in responses) {
            var index = responses[key]
            if (options[key][index] === answers[key]) {
                right++
            }
            else {
                wrong++
            }
        }

        // calculate the numbers of key in an object (questions is not an array is an object)
        var len = Object.keys(questions).length
        var noresponses = len - right - wrong
        console.log(len, right, wrong, noresponses)
        alert(`right: ${right} - wrong: ${wrong} - noreponses: ${noresponses}`)
        // verify the responses
    }

    startGame()
})