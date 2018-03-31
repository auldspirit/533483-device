 var formClick = document.querySelector(".btn-write");
    var popup = document.querySelector(".contact-us");
    var close = popup.querySelector(".modal-close");

    var form = popup.querySelector(".contact-us-form");
    var yourname = popup.querySelector("[name=yourname]");
    var email = popup.querySelector("[name=email]");
    var comment = popup.querySelector("[name=comment]");

    var isStorageSupport = true;
    var namestorage = "";
    var emailstorage = "";
    var focused = false;

    try {
      namestorage = localStorage.getItem("yourname");
      emailstorage = localStorage.getItem("email");
    } catch (err) {
      isStorageSupport = false;
    }

    formClick.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.add("modal-show","js-popup");
      if (namestorage) {
        yourname.value = namestorage;
        email.focus();
      } else {
        yourname.focus();
        focused = true;
      };

      if (!focused) {
      if (emailstorage) {
        email.value = emailstorage;
        comment.focus();
      } else {
        email.focus();
      }
     } 
    });


    close.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.remove("modal-show","js-error");
    });

    form.addEventListener("submit", function (evt) {
      if (!yourname.value || !email.value || !comment.value) {
        evt.preventDefault();
        popup.classList.remove("js-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("js-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("yourname",yourname.value);
          localStorage.setItem("email",email.value);
          localStorage.setItem("comment",comment.value);
        }
      }  
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
          popup.classList.remove("modal-show", "js-error");
        }
      }
    });

    var mapLink = document.querySelector(".button-map");
    var mapPopup = document.querySelector(".modal-map");
    var mapClose = mapPopup.querySelector(".modal-close");

    mapLink.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show","js-popup");
    });

    mapClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function (evt) {
      if (evt.keyCode === 27) {
        evt.preventDefault();
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
      }
    });
