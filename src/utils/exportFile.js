
export const exportFile=(fileContent,fileName,extention)=>{
     const filepath = `../${fileName}.${extention}`;
     console.log(`the file was saved in: ${filepath}`);
    
    // fs.writeFile(filepath, fileContent, (err) => {
    //     if (err) throw err;
    //     console.log("The file was succesfully saved!");
    // }); 
}

// const greetingContent = preval`
//   const fs = require('fs')
//   module.exports = fs.readFileSync(require.resolve('./greeting.txt'), 'utf8')
// `
// console.log(greetingContent);

