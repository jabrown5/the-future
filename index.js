// THIS IS A PROGRAM THAT CAN WRITE AND READ JSON

// constants never change
const TAG = 'NODE_APP';
const Reader = require('./Reader')
const Writer = require('./Writer')

let data = {
    eyes: 'hazel',
    hair: 'braided',
    likesCats: true
};


// let is only scoped to a block of code
// limit what is in the global name space
{
// A SIMPLE BLOCK OF CODE
    let test = new Writer('jen.json', JSON.stringify(data));
    console.log(test.toString());
    test.writeData();

    let experiment = new Reader('jen.json');
    console.log(experiment.toString());
    experiment.readFile();
    console.log(experiment.toJSON());
}




