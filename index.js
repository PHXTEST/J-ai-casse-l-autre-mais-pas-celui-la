function bonjour() {
  // fonction normale
  console.log('bonjour ma race');
}

const hola = function () {
  // fonction anonyme
  console.log('hola');
};

//hola(); //une méthode pour pouvoir appeler une fonction

const bonjourno = () => {
  console.log('bonjourno'); //fonction fléchée, plus facile à écrire mais plus dur à lire
};

function bonjourparam(nom) {
  console.log('bonjour ' + nom);
}

function plus(compteur) {
  compteur++;
  //console.log('fonction : ' + compteur);
  return compteur;
}

//let compteur = 1;
//compteur = plus(compteur);
//console.log(compteur);

var x = 'rove';
var y = 'croft';

console.log(x, y);

[x, y] = [y, x]; //commande pour échanger deux variables, mieux qu'en déclarer une nouvelle et intervertir à la main, peut le faire autant de fois que l'on veut.

console.log(x, y);

// import React, { useState } from 'react';
// import { Card } from 'semantic-ui-react';
// import { Icon, Input, Checkbox } from 'semantic-ui-react';
// import { Image, Form, Button } from 'semantic-ui-react';

// function Phone({ phone, secret }) {
//   // const phone = props.phone
//   // const secret = props.secret

//   // const {phone , secret } = props

//   if (secret) {
//     return <p> un numéro secret </p>;
//   }

//   function nomIcon(type) {
//     if (phone.type === 'mobile') {
//       return 'mobile';
//     } else if (phone.type === 'fixe') {
//       return 'phone';
//     }
//     return 'help';
//   }
//   return (
//     <p>
//       <Icon name={nomIcon(phone.type)} />
//       {phone.number}{' '}
//     </p>
//   );
// }

console.log(3 / 2);
console.log(Math.floor(3 / 2));

//TABLEAUX

const demo = [1, 15, 56, 589, 62, 1]; // new Array[...]


//console.log(demo);
//console.log(demo[0]);
//console.log(demo[3]); //très peu utilisée car boucle forof
//for (let index = 0; index < demo.length; index++) {
//  console.log(demo[index]);
//}

//console.log(demo.length); //façon simple d'indiquer la taille du tableau

for (const element of demo) {
  console.log(element);
}
