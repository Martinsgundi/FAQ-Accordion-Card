// Toggles response to FAQ
const articles = document.querySelectorAll("article");

articles.forEach((article) => {  // Gets the parent element(article) for each FAQ and their answers
    const questionAsked = article.querySelector(".question-asked");

    questionAsked.addEventListener("click", () => {
        const response = article.querySelector(".response-to-question");
        const responseCompStyle = window.getComputedStyle(response);

        article.classList.toggle("active");

        if (responseCompStyle.maxHeight === "0px") {
            response.style.maxHeight = response.scrollHeight + "px";
        } else {
            response.style.maxHeight = "0";
        };


        // Closes any FAQ article that isn't currently the clicked one
        articles.forEach((faq) => {
            if (faq !== article) {
                const response = faq.querySelector(".response-to-question");
                response.style.maxHeight = "0";
                faq.classList.remove("active");
            };
        });
    });
});