<script>
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll("nav div");
    
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation();
            closeAllDropdowns();
            this.classList.toggle("active");
        });
    });
    
    document.addEventListener("click", function () {
        closeAllDropdowns();
    });
    
    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("active");
        });
    }
});
</script>
