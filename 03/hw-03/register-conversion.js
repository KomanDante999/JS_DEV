// функция возвращает true, если символ прописной и false, если символ строчный
function upper(lett) {
    if (lett === lett.toUpperCase()) {
        return true
    } else {
        return false
    }
}

// функция возвращает корректное имя согласно правилам грамматики
function correctName(nameOrig) {
    
    let nameCorr = '';
    let letter = '';
    let i = -1

    while (i++ < (nameOrig.length - 1)) {
        
        letter = nameOrig.substr(i, 1);
        
        if (i === 0 && upper(letter) === false) { // если 1-й символ строчный
            
            letterNew = letter.toUpperCase();
            nameCorr = nameCorr + letterNew;
            
        } else if (i === 0) { // если 1-й символ прописной
            
            letterNew = letter;
            nameCorr = nameCorr + letterNew;
            
        } else if (i !== 0 && upper(letter) === true) { // если не 1-й символ прописной
            
            letterNew = letter.toLowerCase();
            nameCorr = nameCorr + letterNew;
            
        } else {
            
            letterNew = letter;
            nameCorr = nameCorr + letterNew;
            
        }
    }
    
    return nameCorr;
}

let name = 'юРИй';
let soname = 'гАгАРиН';
// проверка на изменение
if (name !== correctName(name) ) {
    
    console.log(`имя \"${name}\" было преобразовано к \"${correctName(name)}\"`);
} else {
    
    console.log(`имя \"${name}\" осталось без изменений`);
}

if (soname !== correctName(soname) ) {
    
    console.log(`фамилия \"${soname}\" было преобразовано к \"${correctName(soname)}\"`);
} else {
    
    console.log(`фамилия \"${soname}\" осталось без изменений`);
}

name = 'Ли';
soname = 'сЯоПИн';
// проверка на изменение
if (name !== correctName(name) ) {
    
    console.log(`имя \"${name}\" было преобразовано к \"${correctName(name)}\"`);
} else {
    
    console.log(`имя \"${name}\" осталось без изменений`);
}

if (soname !== correctName(soname) ) {
    
    console.log(`фамилия \"${soname}\" было преобразовано к \"${correctName(soname)}\"`);
} else {
    
    console.log(`фамилия \"${soname}\" осталось без изменений`);
}

name = 'фРИДрих';
soname = 'Энгельс';
// проверка на изменение
if (name !== correctName(name) ) {
    
    console.log(`имя \"${name}\" было преобразовано к \"${correctName(name)}\"`);
} else {
    
    console.log(`имя \"${name}\" осталось без изменений`);
}

if (soname !== correctName(soname) ) {
    
    console.log(`фамилия \"${soname}\" было преобразовано к \"${correctName(soname)}\"`);
} else {
    
    console.log(`фамилия \"${soname}\" осталось без изменений`);
}