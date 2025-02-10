document.addEventListener("DOMContentLoaded", function () {
    const elem = document.getElementById('dob');
    const datepicker = new Datepicker(elem, {
        // options
        autohide: true,
        format: 'MM-dd'
    });
    //add random animation to title
    const attentionSeekers = ["bounce", "flash", "pulse", "rubberBand", "shakeX", "shakeY", "headShake", "swing", "tada", "wobble", "jello", "heartBeat",];
    document.getElementById('page-title').classList.add('animate__' + attentionSeekers[Math.floor(Math.random() * attentionSeekers.length)])
    // uncheck all boxes by default (Firefox)
    document.querySelectorAll('.form-check-input').forEach(c => c.checked = false);
    // event listener for check/uncheck
    document.getElementById('checkbox-card').addEventListener('change', function (e) {  
        if (e.target.classList.contains('form-check-input')) {
            const elem = document.getElementById(e.target.id + 'Img');
            elem.style.visibility = "visible";
            elem.classList.remove("animate__animated", "animate__bounceInDown", "animate__bounceOutUp");
            e.target.checked ?
                elem.classList.add("animate__animated", "animate__bounceInUp") :
                elem.classList.add("animate__animated", "animate__bounceOutUp");
        }
    });
    //click all balloons
    document.getElementById('all-balloons').addEventListener('click', function(e){;
        e.preventDefault();
        document.querySelectorAll('.form-check-input').forEach(elem => elem.checked ? null : elem.click());
    });
    //change title color
    document.getElementById('checkbox-card').addEventListener('mouseover', function(e){
        if (!e.target.classList.contains('form-check-label')) return;
        let color = e.target.getAttribute('for');
        document.getElementById('page-title').style.color = color;
    });
    //remove title color
    document.getElementById('checkbox-card').addEventListener('mouseout', function(e){
        if (!e.target.classList.contains('form-check-label')) return;
        document.getElementById('page-title').style.color = 'black';
    });
    //toast on empty submit
    const toastLiveExample = document.getElementById('liveToast')
    document.getElementById('submit').addEventListener('click', function(e){
        let anyChecked = false;
        document.querySelectorAll('.form-check-input').forEach(elem => anyChecked |= elem.checked);
        if (anyChecked) return;
        const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
        toastBootstrap.show()

    });
});