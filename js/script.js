var header = new Headhesive('.header-menu');
var options = {
    offset: 100
  };

  $(document).ready(function () {

    var link = $('.menu-link');
    var link_active = $('.menu-link_active');
    var menu = $('.menu');
    var nav_link = $('.menu a');
    link.click(function () {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });

    nav_link.click(function () {
        link.toggleClass('menu-link_active');
        menu.toggleClass('menu_active');
    });
  });


function SendPhone() {
    if ($(".behind-form__tel").val() === null || $(".behind-form__tel").val() === "") {
        alert("Введите ваш номер телефона.");    
    } else {
        Email.send({
            SecureToken: "4767df3c-36db-49dd-9acf-1ba6a08e5f5f",
            To: "family-developers@yandex.ru",
            From: "family-developers@yandex.ru",
            Subject: "Хотят связи тел. " + $(".behind-form__tel").val(),
            Body: "С нами хотят связаться, надо позвонить в течении дня тел. " + $(".behind-form__tel").val(),
            Attachments: []
        }).then(
            message => message === "OK" ? alert("Сообщение успешно отправлено, ожидайте звонка.") : alert("Не удалось отправить сообщение, попробуйте позже.")
        );
    }
    
}
function SendMessages() {
    let check = false;
    var messages = "Вы не ввели:";

    if ($(".message-form__name").val() === null || $(".message-form__name").val() === "") {
        messages += "\n- Имя";
        check = true;
    }
    if ($("message-form__email").val() === null || $(".message-form__email").val() === "") {
        messages += "\n- Email";
        check = true;
    } 
    if ($("message-form__subject").val() === null || $(".message-form__subject").val() === "") {
        messages += "\n- Тему сообщения";
        check = true;
    } 
    if ($(".message-form__text").val() === null || $(".message-form__text").val() === "") {
        messages += "\n- Текст вашего сообщения";
        check = true;
    } 

    if (check) {
        alert(messages);
    } else {
        let body = "<p><b>С нами хочет связаться клиент:</b></p>";
        body += "<p>Имя клиента: " + $(".message-form__name").val()+"</p>";
        body += "<p>Email клиента: " + $(".message-form__email").val() + "</p>";
        body += "<p>Что клиенту надо: " + $(".message-form__subject").val() + "</p>";
        body += "<p>Сообщение клиента: " + $(".message-form__text").val() + "</p>";

        Email.send({
            SecureToken: "4767df3c-36db-49dd-9acf-1ba6a08e5f5f",
            To: "family-developers@yandex.ru",
            From: "family-developers@yandex.ru",
            Subject: "Письмо от клиента - " + $(".message-form__email").val(),
            Body: body,
            Attachments: []
        }).then(
            message => message === "OK" ? alert("Сообщение успешно отправлено, мы с вами свяжемся.") : alert("Не удалось отправить сообщение, попробуйте позже.")
        );
    }     
}
function GoToSendMessages(subject) {    
    $(".message-form__subject").val(subject);
    setTimeout(alert, 300,"Заполните форму связи.");
}
