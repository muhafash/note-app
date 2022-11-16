import React from 'react';
import { createRoot } from 'react-dom/client';
const element = React.createElement(
  'p',
  {
    className: 'red-paragraph',
  },
  'Hello, React!',
);
// Deklarasi variabel Heading element
const heading = React.createElement("h1", null, "Biodata Diri");
// Deklarasi variabel listItem element
const listItem1 = React.createElement("li", null,"Nama: Muhammad Fajri Assidiq");
const listItem2 = React.createElement("li", null,"Status: Software Engineer");
const listItem3 = React.createElement("li", null, "Tagline: Fiddunya wal Akhiroh");
// Memasukkan elements listItem ke dalam element orderedList
const unorderedList = React.createElement("ul", null, [listItem1, listItem2, listItem3]);
// Membuat parent element container yang menampung semua lement child sudah dibuat
const container = React.createElement("div",null, [heading,unorderedList]);

/**  
 * * Semua Ini karna menggunakan react traditional menggunakan file dengan ekstensi .js 
 * ! Dibawah merupakan method override root Component 
 * TODO  berhati2 terhadapa override methods
 */
// const root = createRoot(document.getElementById('root'));
// root.render(container);