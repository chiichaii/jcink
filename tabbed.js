<script>
window.onload = function() {
    var labels = Array.from(document.querySelectorAll('.tab'));
    labels.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    var parentContainer = document.querySelector('.tabs-container');
    labels.forEach(function(label) {
        parentContainer.appendChild(label.parentElement);
    });
};
</script>
