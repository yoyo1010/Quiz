            //Start Section
            let start = document.querySelector("#start");

            //guide Section

            //Quiz Section
            let quiz = document.querySelector("#quiz");

            //question Section
            let questionNo = document.querySelector("#questionNo");
            let questionText = document.querySelector("#questionText");

            //Multiple Choices Of Questions
            let option1 = document.querySelector("#option1");
            let option2 = document.querySelector("#option2");
            let option3 = document.querySelector("#option3");
            let option4 = document.querySelector("#option4");

            //correct and next Button

            //Result Section
            let result = document.querySelector("#result");
            let points = document.querySelector("#points");
            let quit = document.querySelector("#quit");

            //Get All 'H4' From Quiz Section (MCQS)
            let choice_que = document.querySelectorAll(".choice_que");


            let index = 0;
            let timer = 0;
            let interval = 0;

            //total points
            let correct = 0;

            //store Answer Value
            let UserAns = undefined;


            let loadData = () => {
                questionNo.innerText = index + 1 + ". ";
                questionText.innerText = MCQS[index].question;
                option1.innerText = MCQS[index].choice1;
                option2.innerText = MCQS[index].choice2;
                option3.innerText = MCQS[index].choice3;
                option4.innerText = MCQS[index].choice4;
            }

            loadData();

            //what happen when 'Start' Button Will Click
            start.addEventListener("click", () => {
                start.style.display = "none";
                quiz.style.display = "block";
                loadData();
                //    remove All Active Classes When Continue Button Will Click

                choice_que.forEach(removeActive => {
                    removeActive.classList.remove("active");
                })
            });

            choice_que.forEach((choices, choiceNo) => {
                choices.addEventListener("click", () => {

                    choices.classList.add("active");
                    //check answer 需要修改这里的逻辑
                    correct=correct+MCQS[index].answer[choiceNo];
                    //disable All Options When User Select An Option
                    for (i = 0; i <= 3; i++) {
                        choice_que[i].classList.add("disabled");
                    }
                    ////what happen when Option Will Click
                    if (index !== MCQS.length - 1) {
                        index++;
                        choice_que.forEach(removeActive => {
                            removeActive.classList.remove("active");
                        })
                        //question
                        loadData();
                
                    } else {
                        index = 0;

                        //when Quiz Question Complete Display Result Section
                        quiz.style.display = "none";
                        if (correct >= 1 && correct <= 2) {
                            points.innerHTML = `You are a high level fishing man ${correct}`;
                            points.style.color = "red";
                          } else if (correct >= 3 && correct <= 6) {
                            points.innerHTML = `You are a low level fishing man ${correct}`;
                            points.style.color = "orange";
                          } else {
                            points.innerHTML = `You are a high level fishing man ${correct}`;
                            points.style.color = "green";
                          }
                        result.style.display = "block";
                    }
                    for (i = 0; i <= 3; i++) {
                        choice_que[i].classList.remove("disabled");
                    }
                })
            });

            //what happen when 'Quit' Button Will Click
            quit.addEventListener("click", () => {
                start.style.display = "block";
                result.style.display = "none";
                correct=0
            });
