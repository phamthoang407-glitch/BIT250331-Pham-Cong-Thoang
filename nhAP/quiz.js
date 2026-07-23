/* =====================================================
   CYBER QUIZ 4.0
   quiz.js - PHẦN 1 
=====================================================*/

// ==========================
// BIẾN TOÀN CỤC
// ==========================

let selectedTopic = "";
let quizData = [];

let currentQuestion = 0;

let score = 0;
let correctAnswer = 0;
let wrongAnswer = 0;

let timer = null;
let timeLeft = 20;

let level = 1;
let exp = 0;

// ==========================
// LẤY THẺ HTML
// ==========================

const hero = document.querySelector(".hero");
const topics = document.querySelector(".topics");
const cards = document.querySelectorAll(".card");

let quizSection;

// ==========================
// KHỞI ĐỘNG
// ==========================

document.addEventListener("DOMContentLoaded", () => {

    createQuiz();

    registerTopic();

});

// ==========================
// TẠO GIAO DIỆN QUIZ
// ==========================

function createQuiz() {

    quizSection = document.createElement("section");

    quizSection.className = "quiz-card";

    quizSection.style.display = "none";

    quizSection.innerHTML = `

        <h2 id="quizTitle">

            Cyber Quiz 4.0

        </h2>

        <div class="progress">

            <div class="progress-value" id="progressBar"></div>

        </div>

        <div class="quiz-info">

            <span id="questionIndex">

                Câu 1

            </span>

            <span id="timer">

                20s

            </span>

        </div>

        <h3 id="questionText">

            Đang tải...

        </h3>

        <div class="answers" id="answerBox">

        </div>

        <button
            class="cyber-btn"
            id="nextBtn"
            style="display:none;">

            Câu tiếp

</button>

    `;

    document.body.appendChild(quizSection);

}

// ==========================
// CLICK CHỦ ĐỀ
// ==========================

function registerTopic() {

    cards.forEach(card => {

        card.addEventListener("click", () => {

            selectedTopic = card.dataset.topic;

            startQuiz();

        });

    });

}

// ==========================
// BẮT ĐẦU QUIZ
// ==========================

function startQuiz() {

    resetQuiz();

    if (typeof questions === "undefined") {

        alert("Chưa tìm thấy questions.js");

        return;

    }

    quizData = questions.filter(q => q.category === selectedTopic);

    shuffleArray(quizData);

    if (quizData.length === 0) {

        alert("Chủ đề này chưa có dữ liệu.");

        return;

    }

    hero.style.display = "none";

    topics.style.display = "none";

    quizSection.style.display = "block";

    loadQuestion();

}
// ==========================
// XÁO TRỘN MẢNG
// ==========================

function shuffleArray(array){

    for(let i=array.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [array[i],array[j]]=[array[j],array[i]];

    }

    return array;

}

// ==========================
// LOAD CÂU HỎI
// ==========================

function loadQuestion() {

    if (currentQuestion >= quizData.length) {

        finishQuiz();

        return;

    }

    const data = quizData[currentQuestion];

    // Ẩn giải thích cũ

    const oldExplain = document.getElementById("explainBox");

    if (oldExplain) {

     oldExplain.remove();

    }

    // Ẩn nút Câu tiếp

    document.getElementById("nextBtn").style.display = "none";

    // Tiêu đề câu hỏi

    document.getElementById("questionText").innerHTML = data.question;

    // Số câu

    document.getElementById("questionIndex").innerHTML =
        "Câu " + (currentQuestion + 1) + " / " + quizData.length;

    // Thanh tiến trình

    const percent = ((currentQuestion + 1) / quizData.length) * 100;

    document.getElementById("progressBar").style.width =
        percent + "%";

    // Reset thời gian

    timeLeft = 20;

    document.getElementById("timer").innerHTML =
        timeLeft + "s";

    // Hiển thị đáp án
    // FIX: tạo mảng đáp án kèm chỉ số GỐC (realIndex), rồi xáo trộn mảng này
    // để giữ liên kết đúng giữa nút hiển thị (thứ tự đã xáo) và
    // đáp án đúng (data.answer, chỉ số gốc).

    const answerBox =
        document.getElementById("answerBox");

    answerBox.innerHTML = "";

    const shuffledOptions = shuffleArray(
        data.options.map((text, realIndex) => ({ text, realIndex }))
    );

    shuffledOptions.forEach((item, position) => {

        const button =
            document.createElement("div");

        button.className = "answer";

        button.innerHTML =

            `<strong>${String.fromCharCode(65 + position)}.</strong>
             ${item.text}`;

        // Lưu chỉ số GỐC để tra cứu đúng/sai và tô đúng ô,
        // không phụ thuộc vào vị trí hiển thị đã bị xáo trộn.
        button.dataset.realIndex = item.realIndex;

        button.addEventListener("click", () => {

            checkAnswer(item.realIndex);

        });

        answerBox.appendChild(button);

    });

    // Đồng hồ sẽ viết ở phần 2.3
    startTimer();

}

// ==========================
// TIỆN ÍCH: tìm nút đáp án theo chỉ số GỐC
// ==========================

function getAnswerButtonByRealIndex(realIndex) {

    return document.querySelector(
        `.answer[data-real-index="${realIndex}"]`
    );

}

// ==========================
// KIỂM TRA ĐÁP ÁN
// ==========================

function checkAnswer(index) {
    clearInterval(timer);

    const data = quizData[currentQuestion];

    const answers = document.querySelectorAll(".answer");

    // Nếu đã trả lời thì không cho chọn nữa
    if (answers[0].classList.contains("disabled")) {

        return;

    }

    // Khóa tất cả đáp án
    answers.forEach(item => {

        item.classList.add("disabled");

        item.style.pointerEvents = "none";

    });

    const correctIndex = data.answer;

    const clickedBtn = getAnswerButtonByRealIndex(index);
    const correctBtn = getAnswerButtonByRealIndex(correctIndex);

    // Chọn đúng
    if (index === correctIndex) {

        clickedBtn.classList.add("correct");

        score += 10;

        correctAnswer++;

        exp += 10;

    }

    // Chọn sai
    else {

        clickedBtn.classList.add("wrong");

        correctBtn.classList.add("correct");

        wrongAnswer++;

    }

    // Hiện phần giải thích
    let explainBox = document.getElementById("explainBox");

    if (!explainBox) {

        explainBox = document.createElement("div");

        explainBox.id = "explainBox";

        explainBox.style.marginTop = "25px";

        explainBox.style.padding = "20px";

        explainBox.style.borderRadius = "15px";

        explainBox.style.background = "#0f2438";

        explainBox.style.border = "1px solid #00d9ff";

        document.querySelector(".quiz-card").appendChild(explainBox);

    }

    explainBox.innerHTML = `

        <h3 style="color:#00d9ff;margin-bottom:15px;">

            Giải thích

        </h3>

        <p style="line-height:28px;">

            ${data.explanation}

        </p>

        ${data.source ? `
        <br>
        <strong>Nguồn:</strong>
        <br>
        ${data.source}
        ` : ""}

        ${data.link ? `
        <br><br>
        <a
            href="${data.link}"
            target="_blank"
            style="
                color:#00d9ff;
                text-decoration:none;
            ">
            Xem tài liệu
        </a>
        ` : ""}

    `;

    // Hiện nút Câu tiếp
    document.getElementById("nextBtn").style.display = "inline-block";

}

// ==========================
// CÂU TIẾP
// ==========================

function nextQuestion(){

    clearInterval(timer);

    currentQuestion++;

    if(currentQuestion >= quizData.length){

        finishQuiz();

        return;

    }

    loadQuestion();

}
// ==========================
// ĐỒNG HỒ ĐẾM NGƯỢC
// ==========================

function startTimer(){

    clearInterval(timer);

    timeLeft = 20;

    const timerText = document.getElementById("timer");

    timerText.innerHTML = timeLeft + "s";

    timer = setInterval(()=>{

        timeLeft--;

        timerText.innerHTML = timeLeft + "s";

        if(timeLeft <= 5){

            timerText.style.color = "#ff4d4d";

        }
        else{

            timerText.style.color = "#00d9ff";

        }

        if(timeLeft <= 0){

            clearInterval(timer);

            autoWrong();

        }

    },1000);

}
// ==========================
// HẾT GIỜ
// ==========================

function autoWrong(){

    wrongAnswer++;

    const data = quizData[currentQuestion];

    const answers = document.querySelectorAll(".answer");

    answers.forEach(answer=>{

        answer.classList.add("disabled");

        answer.style.pointerEvents="none";

    });

    // FIX: tra đúng ô theo chỉ số GỐC (data-real-index),
    // không dùng answers[data.answer] vì thứ tự DOM đã bị xáo trộn.
    const correctBtn = getAnswerButtonByRealIndex(data.answer);

    if (correctBtn) {

        correctBtn.classList.add("correct");

    }

    let explainBox=document.getElementById("explainBox");

    if(!explainBox){

        explainBox=document.createElement("div");

        explainBox.id="explainBox";

        explainBox.style.marginTop="25px";

        explainBox.style.padding="20px";

        explainBox.style.background="#0f2438";

        explainBox.style.borderRadius="15px";

        explainBox.style.border="1px solid #00d9ff";

        document.querySelector(".quiz-card").appendChild(explainBox);

    }

    explainBox.innerHTML=`

        <h3 style="color:#ff4d4d">

            Hết thời gian

        </h3>

        <p>

            ${data.explanation}

        </p>

        ${data.source ? `
        <br>
        <strong>Nguồn:</strong>
        <br>
        ${data.source}
        ` : ""}

    `;

    document.getElementById("nextBtn").style.display="inline-block";

}

// ==========================
// KẾT THÚC QUIZ
// ==========================

function finishQuiz(){
    let bestScore = Number(localStorage.getItem("bestScore")) || 0;

    if(score > bestScore){

         localStorage.setItem("bestScore",score);

         bestScore = score;

    }
    let playTime = Number(localStorage.getItem("playTime")) || 0;

    playTime++;

    localStorage.setItem("playTime", playTime);
    let rank = "";

    const percent = (correctAnswer / quizData.length) * 100;

    if(percent >= 90){

        rank = "Xuất sắc";

    }
    else if(percent >= 75){

        rank = "Giỏi";

    }
    else if(percent >= 60){

        rank = "Khá";

    }
    else if(percent >= 40){

        rank = "Trung bình";

    }
    else{

        rank = "Cần cố gắng";

    }



    clearInterval(timer);

    quizSection.innerHTML = `

        <h2 class="glow">

            Hoàn thành bài kiểm tra

        </h2>

        <br>

        <h3>

            Điểm của bạn

        </h3>

        <h1 style="font-size:70px;color:#00d9ff;">

            ${score}

        </h1>
        <br>

        <p>

                🏆 Điểm cao nhất:
             <strong>${bestScore}</strong>

        </p>

        <br>


        <hr style="margin:30px 0;">

        <p>

            ✅ Trả lời đúng:
            <strong>${correctAnswer}</strong>

        </p>

        <br>

        <p>

            ❌ Trả lời sai:
            <strong>${wrongAnswer}</strong>

        </p>

        <br>

        <p>

            📚 Tổng số câu:
            <strong>${quizData.length}</strong>

        </p>

        <br>

        <p>

    ⭐ EXP:
        <strong>${exp}</strong>

    </p>

    <br>

    <p>

    🎖️ Xếp loại:
        <strong>${rank}</strong>

    </p>

    <br>

    <button
            class="cyber-btn"
            onclick="restartQuiz()">

            Làm lại

        </button>

        <button
            class="cyber-btn"
            onclick="goHome()">

            Trang chủ

        </button>

    `;

}

// ==========================
// LÀM LẠI
// ==========================

function restartQuiz(){

    startQuiz();

}
// ==========================
// TRANG CHỦ
// ==========================

function goHome(){

    location.reload();

}

// ==========================
// RESET
// ==========================

function resetQuiz() {

    currentQuestion = 0;

    score = 0;

    correctAnswer = 0;

    wrongAnswer = 0;

    level = 1;

    exp = 0;

    timeLeft = 20;

    clearInterval(timer);

}

// ==========================
// NÚT CÂU TIẾP
// ==========================

document.addEventListener("click", e => {

    if (e.target.id === "nextBtn") {

        nextQuestion();

    }

});

/* =====================================================
   END PART 1
=====================================================*/
