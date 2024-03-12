document.addEventListener('DOMContentLoaded', function () {
    var $html = document.querySelector('html');
    var $checkbox = document.getElementById('toggleSwitch');

    if ($checkbox) {
        $checkbox.addEventListener('change', function () {
            $html.classList.toggle('dark-mode', this.checked);
        });
    } else {
        console.error('Checkbox not found');
    }
});
   