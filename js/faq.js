const faqs = document.querySelectorAll(".faq__block");

faqs.forEach (faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    })
})