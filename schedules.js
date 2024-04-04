


let sidebar = document.querySelectorAll(".menu");
let nav = document.querySelector("nav");
let layout = document.querySelector(".over");
let log = document.querySelector(".log");
let loglist = document.querySelector(".loglist");
let user = document.querySelector(".user");
let admin = document.querySelector(".admin");
let pro = document.querySelector(".pro");
let profile = document.querySelector(".profile-off");
let bdy = document.querySelector(".bdy");
let cng_btn = document.querySelector("#cng_btn");
let profileBtn = document.querySelector("#profile");
let proSubLists = document.querySelector(".proSubLists");
let loglistFlag = 0;
let formOpen = 0;
let profileFlag = 0;
let profileBtnFlag = 0;
cng_btn.addEventListener("click", () => {
    if(profileFlag === 0){
        profileFlag = 1;
        pro.classList.remove("pro");
        pro.classList.add("pro-off");
        profile.classList.remove("profile-off");
        profile.classList.add("profile");
    } else {
        profileFlag = 0;
        pro.classList.remove("pro-off");
        pro.classList.add("pro");
        profile.classList.remove("profile");
        profile.classList.add("profile-off");
    }
});
sidebar.forEach(sidebar => {
    sidebar.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
});
layout.addEventListener("click", () => {
    nav.classList.remove("open");
    if(loglistFlag === 1){
        loglist.classList.remove("loglist-on");
        loglist.classList.add("loglist");
    }
});
log.addEventListener("click", () => {
    if(loglistFlag === 0){
        loglistFlag = 1;
        loglist.classList.remove("loglist");
        loglist.classList.add("loglist-on");
    }
    else{
        loglistFlag = 0;
        loglist.classList.remove("loglist-on");
        loglist.classList.add("loglist");
    }
});
user.addEventListener("click", () => {
    loglistFlag = 0;
    loglist.classList.remove("loglist-on");
    loglist.classList.add("loglist");
});
admin.addEventListener("click", () => {
    loglistFlag = 0;
    loglist.classList.remove("loglist-on");
    loglist.classList.add("loglist");
});
bdy.addEventListener("click", () => {
    if(loglistFlag === 1){
        loglist.classList.remove("loglist-on");
        loglist.classList.add("loglist");
        loglistFlag = 0;
    }
});

profileBtn.addEventListener("click", () => {
    if(profileBtnFlag === 0){
        profileBtnFlag = 1;
        proSubLists.classList.remove("proSubLists");
        proSubLists.classList.add("proSubLists-on");
    } else {
        profileBtnFlag = 0;
        proSubLists.classList.remove("proSubLists-on");
        proSubLists.classList.add("proSubLists");
    }
});
bdy.addEventListener("click", () => {
    if(profileBtnFlag === 1){
        proSubLists.classList.remove("proSubLists-on");
        proSubLists.classList.add("proSubLists");
        profileBtnFlag = 0;
    }
});

let open = document.querySelector(".user");
let close = document.querySelector(".close-user");
let form = document.querySelector(".form");
let hide = document.querySelector("#hide");
let show = document.querySelector("#show");
let pass = document.querySelector("#pass");
open.addEventListener("click", () => {
    if(formOpen === 2){
        form_admin.classList.remove("form-admin-open");
    }
    if(formOpen === 3){
        form_sign.classList.remove("signup-form-open");
    }
    form.classList.add("form_open");
    formOpen = 1;
});
close.addEventListener("click", () => {
    form.classList.remove("form_open");
});
hide.addEventListener("click", () => {
    hide.classList.remove("eye-hide");
    hide.classList.add("eye-hide-off");
    show.classList.remove("eye-show-off");
    show.classList.add("eye-show");
    pass.type = "text";
});
show.addEventListener("click", () => {
    show.classList.remove("eye-show");
    show.classList.add("eye-show-off");
    hide.classList.remove("eye-hide-off");
    hide.classList.add("eye-hide");
    pass.type = "password";
});
let admin_btn = document.querySelector(".admin");
let form_admin = document.querySelector(".form-admin");
let close_admin = document.querySelector(".close-admin");
let hide_admin = document.querySelector("#hide-admin");
let show_admin = document.querySelector("#show-admin");
let pass_admin = document.querySelector("#pass-admin");
admin_btn.addEventListener("click", () => {
    if(formOpen === 1){
        form.classList.remove("form_open");
    }
    if(formOpen === 3){
        form_sign.classList.remove("signup-form-open");
    }
    form_admin.classList.add("form-admin-open");
    formOpen = 2;
});
close_admin.addEventListener("click", () => {
    form_admin.classList.remove("form-admin-open");
});
hide_admin.addEventListener("click", () => {
    hide_admin.classList.remove("eye-hide");
    hide_admin.classList.add("eye-hide-off");
    show_admin.classList.remove("eye-show-off");
    show_admin.classList.add("eye-show");
    pass_admin.type = "text";
});
show_admin.addEventListener("click", () => {
    show_admin.classList.remove("eye-show");
    show_admin.classList.add("eye-show-off");
    hide_admin.classList.remove("eye-hide-off");
    hide_admin.classList.add("eye-hide");
    pass_admin.type = "password";
});

let sign_btn = document.querySelector(".sign");
let form_sign = document.querySelector(".signup-form");
let close_sign = document.querySelector(".close-sign-form");
let hide_pass = document.querySelector("#hide-pass");
let show_pass = document.querySelector("#show-pass");
let pass_pass = document.querySelector("#pass-pass");
sign_btn.addEventListener("click", () => {
    if(loglistFlag === 1){
        loglistFlag = 0;
        loglist.classList.remove("loglist-on");
        loglist.classList.add("loglist");
    }
    if(formOpen === 1){
        form.classList.remove("form_open");
    }
    if(formOpen === 2){
        form_admin.classList.remove("form-admin-open");
    }
    form_sign.classList.add("signup-form-open");
    formOpen = 3;
});
close_sign.addEventListener("click", () => {
    form_sign.classList.remove("signup-form-open");
});
hide_pass.addEventListener("click", () => {
    hide_pass.classList.remove("eye-hide");
    hide_pass.classList.add("eye-hide-off");
    show_pass.classList.remove("eye-show-off");
    show_pass.classList.add("eye-show");
    pass_pass.type = "text";
});
show_pass.addEventListener("click", () => {
    show_pass.classList.remove("eye-show");
    show_pass.classList.add("eye-show-off");
    hide_pass.classList.remove("eye-hide-off");
    hide_pass.classList.add("eye-hide");
    pass_pass.type = "password";
});
let hide_repass = document.querySelector("#hide-repass");
let show_repass = document.querySelector("#show-repass");
let pass_repass = document.querySelector("#re-pass-repass");
hide_repass.addEventListener("click", () => {
    hide_repass.classList.remove("eye-hide");
    hide_repass.classList.add("eye-hide-off");
    show_repass.classList.remove("eye-show-off");
    show_repass.classList.add("eye-show");
    pass_repass.type = "text";
});
show_repass.addEventListener("click", () => {
    show_repass.classList.remove("eye-show");
    show_repass.classList.add("eye-show-off");
    hide_repass.classList.remove("eye-hide-off");
    hide_repass.classList.add("eye-hide");
    pass_repass.type = "password";
});

let bttn = document.querySelector("#bttn");

bttn.addEventListener("click", () => {
    
    console.log("Hello " + val);
    
});

