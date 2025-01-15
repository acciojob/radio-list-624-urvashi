//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    
    document.getElementById('option3').checked = true;

   
    const radioGroups = document.querySelectorAll('.radio-group');
    radioGroups.forEach((group, index) => {
        if ((index + 1) % 2 === 0) {
            group.querySelector('input[type="radio"]').classList.add('input');
        }
    });
});

