// ======================================
// ui.js
// Quản lý toàn bộ giao diện CyberQuiz
// ======================================

"use strict";

// ===============================
// THÔNG BÁO (TOAST)
// ===============================

function showToast(message, type = "success") {

    const oldToast = document.querySelector(".toast");

    if (oldToast) {
        oldToast.remove();
    }

    const toast = document.createElement("div");

    toast.className = `toast ${type}`;

    toast.innerHTML = message;

    document.body.appendChild(toast);

    setTimeout(() => {

        toast.classList.add("show");

    }, 100);

    setTimeout(() => {

        toast.classList.remove("show");

        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 3000);

}
// ===============================
// LOADING
// ===============================

function showLoading() {

    const loading = document.createElement("div");

    loading.id = "loading";

    loading.innerHTML = `

        <div class="loader"></div>

        <p>Đang tải...</p>

    `;

    document.body.appendChild(loading);

}

function hideLoading() {

    const loading = document.getElementById("loading");

    if (loading) {

        loading.remove();

    }

}
// ===============================
// HIỆN PHẦN TỬ
// ===============================

function fadeIn(element) {

    element.style.opacity = 0;

    element.style.display = "block";

    let opacity = 0;

    const timer = setInterval(() => {

        opacity += 0.05;

        element.style.opacity = opacity;

        if (opacity >= 1) {

            clearInterval(timer);

        }

    }, 15);

}
// ===============================
// ẨN PHẦN TỬ
// ===============================

function fadeOut(element) {

    let opacity = 1;

    const timer = setInterval(() => {

        opacity -= 0.05;

        element.style.opacity = opacity;

        if (opacity <= 0) {

            clearInterval(timer);

            element.style.display = "none";

        }

    }, 15);

}
// ===============================
// CẬP NHẬT PROGRESS BAR
// ===============================

function updateProgress(value) {

    const progress = document.getElementById("progressBar");

    if (!progress) return;

    progress.style.width = value + "%";

}