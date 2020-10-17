// ops:flp:fensoft
'use strict';
(function () {
    var editor = CKEDITOR.replace("ckEditor", {
        allowedContent: true,
        contentsCss: "./css/ckeditor-content-styles.css",
        extraAllowedContent: "i[onmouseover]"
    });
    CKEDITOR.scriptLoader.load("script.js");
    if (editor) {
        editor.on('contentDom', function () {
            var currentTargetIndex;
            var targetElement = editor.document.getElementsByTag('i');
            var dpdnEvent = document.getElementById('dpdn');
            for (let i = 0; i < targetElement.count(); i++) {
                targetElement.$[i].addEventListener('mouseover', function (ev) {
                    if (ev.target.className && ev.target.className === 'action-item') {
                        currentTargetIndex = i;
                        myFunction();
                        dpdnEvent.style.left = ev.clientX + 40 + 'px';
                        dpdnEvent.style.top = ev.clientY + 110 + 'px';
                    }
                });
            }
            function myFunction(value) {
                if (value) {
                    targetElement.$[currentTargetIndex].innerHTML = value;
                } else {
                    document.getElementById("dpdnContent").classList.toggle("show");
                }
            }
            window.onclick = function (event) {
                if (!event.target.matches('.dropbtn')) {
                    var dpd = event.target.getAttribute('href');
                    if (dpd) {
                        myFunction(event.target.innerText);
                    }
                    var dropdowns = document.getElementsByClassName("dropdown-content");
                    var i;
                    for (i = 0; i < dropdowns.length; i++) {
                        var openDropdown = dropdowns[i];
                        if (openDropdown.classList.contains('show')) {
                            openDropdown.classList.remove('show');
                        }
                    }
                }
            }
        });
    }
})();
