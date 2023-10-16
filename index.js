let string = " ";

btn = document.querySelectorAll(".btn");
console.log(btn);

Array.from(btn).forEach((e) => {
    e.addEventListener('click', (e1) => {

        let z = e1.target.innerText;
        console.log(e1.target.innerText);

        if (z == "=") {

            let u = string;
            string = string.replace('X', '*');
            string = string.replace('%', '*');
            string = eval(string);
            if (u.includes('%')) {
                string = string / 100;

            }
            document.querySelector('.input').value = string;

        }
        else if (z == "C") {

            string = "";
            document.querySelector('.input').value = string;
        }

        else if (z == "+/-") {

            string = "";
            document.querySelector('.input').value = string;
        }
        else {

            string = string + z;
            document.querySelector('.input').value = string;
        }

    })
})
