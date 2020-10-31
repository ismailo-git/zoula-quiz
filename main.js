
const BonneReponses = ['B', 'A', 'B', 'A'];
const form = document.querySelector('.quiz-form');
const resultat = document.querySelector('.resultat');


form.addEventListener('submit', e => {

    e.preventDefault();

    let score = 0;

    const Reponse = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    Reponse.forEach((answer, index) => {

        if(answer === BonneReponses[index]) {

            score += 25;
        }
    });

    scrollTo(0, 0);
   
    resultat.classList.remove('d-none');
    
    let i = 0;
    const timer = setInterval(() => {

         resultat.querySelector('span').textContent = `${i}%`;
         if (i === score) {
            clearInterval(timer)
         }
         else {
             i++;
         }
    }, 10)
})