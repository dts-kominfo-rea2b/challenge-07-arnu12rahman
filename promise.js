const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme

//asyc handler with inputan emosi
const promiseOutput = async (req) => {
    try {
        //get data from theater promise
        const theaIXX = await promiseTheaterIXX();
        const theaVGC = await promiseTheaterVGC();

        //merge result
        const theaMerge = [...theaIXX, ...theaVGC];

        //filter result array
        return (
            theaMerge?.filter((theather) => theather.hasil == req)?.length || 0
        );
    } catch (error) {
        console.log("Error occur: " + error);
    }
};

module.exports = {
    promiseOutput,
};
