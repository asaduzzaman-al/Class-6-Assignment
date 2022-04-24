
const student = [
    ['Asaduzzaman', '12', '16', 'Eleven', 'Male', 'Uttora', '3500'],
    ['Anima', '1', '10', 'Five', 'Female', 'Mirpur', '1000'],
    ['Anika', '13', '16', 'Eleven', 'Female', 'Mirpur', '3000'],
    ['Niba', '2', '11', 'Five', 'Female', 'Uttora', '2000'],
    ['Asifa', '14', '25', 'Eleven', 'Female', 'Uttora', '3000'],
    ['Asad', '3', '10', 'Five', 'Male', 'Badda', '1000'],
    ['Asif', '15', '20', 'Eleven', 'Male', 'Mirpur', '3400'],
    ['Raju', '4', '12', 'Five', 'Male', 'Mirpur', '1200'],
    ['Rupom', '16', '23', 'Eleven', 'Male', 'Badda', '4000'],
    ['Ahmed', '5', '13', 'Five', 'Male', 'Uttora', '1000'],
    ['Rupa', '17', '17', 'Eleven', 'Female', 'Mirpur', '2300'],
    ['Asma', '6', '10', 'Five', 'Female', 'Mirpur', '1100'],
    ['Anik', '18', '19', 'Eleven', 'Male', 'Mirpur', '3000'],
    ['Asifus', '7', '12', 'Five', 'Female', 'Uttora', '1000'],
    ['Akbar', '19', '21', 'Eleven', 'Male', 'Uttora', '2000'],
    ['Lieon', '8', '14', 'Five', 'Male', 'Mirpur', '1400'],
    ['Airin', '20', '22', 'Eleven', 'Female', 'Mirpur', '3000'],
    ['Mariom', '9', '12', 'Five', 'Female', 'Dhanmondi', '1000'],
    ['Sumon', '21', '18', 'Eleven', 'Male', 'Badda', '5000'],
    ['Nur', '10', '10', 'Five', 'Male', 'Mirpur', '1500', '57'],
    ['Sumona', '22', '24', 'Eleven', 'Female', 'Dhanmondi', '3000'],
    ['Rasidul', '11', '11', 'Five', 'Male', 'Uttora', '1600'],
    ['Anikas', '23', '16', 'Eleven', 'Female', 'Mirpur', '3000'],
    ['Ria', '12', '10', 'Five', 'Female', 'Mirpur', '1000'],
    ['Alim', '24', '16', 'Eleven', 'Male', 'Uttora', '4000'],
    ['Ornob', '13', '12', 'Five', 'Male', 'Uttora', '1800'],
    ['Abdur', '25', '17', 'Eleven', 'Male', 'Mirpur', '3000'],
    ['Rahman', '14', '10', 'Five', 'Male', 'Mirpur', '1300'],
    ['Mamun', '26', '19', 'Eleven', 'Male', 'Uttora', '3000'],
    ['jinat', '15', '13', 'Five', 'Male', 'Badda', '1200'],
 
]
/**
 * Total admission fees
 */
//  let total_admission = 0;
// student.map((data, i) => {
//     console.log(` Class : ${data[3]} - Admission Fees : ${data[6]}`);
//     total_admission += +data[6];
// })
// console.log(`
// --------------------------------------------------------------------------
//  Total Admission Fees : ${total_admission}
// `);

/**
 * All Female Students
 */

// student.sort().map((data, index) => {
//     if(data[4] === 'Female'){
//         console.log(`
//          Id   : ${index + 1}
//          Name : ${data[0]}
//          Roll : ${data[1]}
//          Age  : ${data[2]}
//          Class : ${data[3]}
//          Gender : ${data[4]}
//          Location : ${data[5]}
//          Admission fees : ${data[6]}
//     `);
//     }
// })

/**
 *  student between 10 - 25 age
 */

// student.sort().map((data, index) => {
//     if ( data[2] === '10' || data[2] === '11' || data[2] === '12' || data[2] === '13' || data[2] === '14' || data[2] === '15' || data[2] === '16' || data[2] === '17' || data[2] === '18' || data[2] === '19' || data[2] === '20' || data[2] === '21' || data[2] === '22' || data[2] === '23' || data[2] === '24' || data[2] === '25'){
//             console.log(`
//             Id  : ${index + 1}
//             Name : ${data[0]}
//             Roll : ${data[1]}
//             Age : ${data[2]}
//             Class : ${data[3]}
//             Gender : ${data[4]}
//             Location : ${data[5]}
//             Admission fees : ${data[6]}
//         `);
//     }
// })

/**
 *  Find class wise student result
 */
 
// student.sort().map((data, index) => {
//  if(data[3] === 'Eleven' || data[3] === 'Five' ){
//         console.log(`
//         Id  : ${index + 1}
//         Name : ${data[0]}
//         Roll : ${data[1]}
//         Age : ${data[2]}
//         Class : ${data[3]}
//         Gender : ${data[4]}
//         Location : ${data[5]}
//         Admission fees : ${data[6]}
//     `)
//  }

       
// })

/**
 * Location wise student result
 */

student.sort().map((data, index) => {
    if(data[5] === 'Mirpur' || data[5] === 'Uttora' ){
            console.log(`
            Id  : ${index + 1}
            Name : ${data[0]}
            Roll : ${data[1]}
            Age : ${data[2]}
            Class : ${data[3]}
            Gender : ${data[4]}
            Location : ${data[5]}
            Admission fees : ${data[6]}
        `)
    }
})