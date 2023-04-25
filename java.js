fetch('views.txt')
            .then(response => response.text())
            .then(views => {
                document.querySelector('div').innerHTML = `Este site já foi visualizado ${views} vezes.`;
            });

            