const darkModeToggle = document.getElementById('darkModeToggle');
let darkMode = true; 

document.body.classList.add('dark-mode');
document.body.classList.remove('light-mode');
darkModeToggle.addEventListener('click', () => {
    if (darkMode) {
        if (confirm("Are you sure you want to switch to light mode?")) {
            if (confirm("Are you REALLY SURE? Your eyes can be damaged")) {
                let countdown = 10;
                const countdownDiv = document.createElement('div');
                countdownDiv.classList.add('countdown');
                countdownDiv.innerText = countdown;
                document.body.appendChild(countdownDiv);

                const countdownInterval = setInterval(() => {
                    countdown -= 1;
                    countdownDiv.innerText = countdown;

                    if (countdown === 0) {
                        countdownDiv.innerText = "Brace yourself!";
                        setTimeout(() => {
                            countdownDiv.classList.add('flash');
                            document.body.classList.remove('dark-mode');
                            document.body.classList.add('light-mode');
                            darkMode = false;
                            setTimeout(() => countdownDiv.remove(), 500); 

                            setTimeout(() => {
                                const userResponse = confirm("Is that what you wanted?! Huh? DO YOU LIKE IT?");
                                if (userResponse) {
                                    alert("Well, some people are truly weird");
                                } else {
                                    alert("Thank you for being normal!");
                                    document.body.classList.remove('light-mode');
                                    document.body.classList.add('dark-mode');
                                    darkMode = true;
                                }
                            }, 5000);
                        }, 500);
                        clearInterval(countdownInterval);
                    }
                }, 1000);
            }
        }
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        darkMode = true;
    }
});

