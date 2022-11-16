import React from "react";

const Latihan1 = () => {

    return(
        /**
         * ! Dengan CreateElement
         * ? const heading = React.createElement('h1', null, 'React'); 
         * ? const strong = React.createElement('strong', null, 'best tool'
         * ? const paragraph = React.createElement('p', null, ['The ', strong, ' for building UI']
         * ? const divContainer = React.createElement('div', { className: 'container' }, [heading, paragraph]);
         *  TODO : Dengan jsx(javascript expresion) element lebih mudah :                         <div className="container">                                          <h1>React</h1>                                                     <p>The <strong>best tool</strong> for building UI</p>                  </div>      
         */
        <>

        <h1>Biodata Diri</h1>
        <h2>Software Engineer</h2>
        <ul>
            <li>Nama : Muhammad Fajri Assidiq</li>
            <li>Bidang: Techno Economy</li>
            <li>Tagline: Fiddunya wal Akhiroh</li>
            <img src="../assets/img/dicoding-logo.png" alt="" srcset="https://raw.githubusercontent.com/dicodingacademy/BelajarDasarPemrogramanWeb/image-assets/dicoding-logo.png" />
        </ul>
        </>
    )
};

export default Latihan1;