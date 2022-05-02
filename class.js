const btncreate = document.createElement('button');
    btncreate.innerText = "gray";
    btncreate.classList.add('btn');
    btncreate.classList.add('gray');
    btncreate.setAttribute('name', 'changeColor')
    btncreate.style.backgroundColor = "gray"
    document.getElementById("changeColor").appendChild(btncreate);

const btnBlue = document.createElement('button');
    btnBlue.innerText = "Blue";
    btnBlue.classList.add('btn');
    btnBlue.classList.add('blue');
    btnBlue.setAttribute('name', 'changeColor')
    btnBlue.style.backgroundColor = "blue"
    document.getElementById("changeColor").appendChild(btnBlue);
