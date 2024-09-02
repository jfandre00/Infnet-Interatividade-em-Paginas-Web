/* function sumirP() {
    const div = document.querySelector('div');
    const paragraphs = document.querySelectorAll('p');
    const isHidden = paragraphs[0].style.display === 'none';

    paragraphs.forEach(p => {
        p.style.display = isHidden ? 'block' : 'none';
    });

    div.style.backgroundColor = isHidden ? '' : 'blue';
} */


function sumirP() {
    const div = document.querySelector('div');
    const paragraphs = document.querySelectorAll('p');
    const isHidden = paragraphs[0].style.display === 'none';

    for (let i = 0; i < paragraphs.length; i++) {
        if (isHidden) {
            paragraphs[i].style.display = 'block';
        } else {
            paragraphs[i].style.display = 'none';
        }
    }

    if (isHidden) {
        div.style.backgroundColor = '';
    } else {
        div.style.backgroundColor = 'blue';
    }
}