require("./db/connection");
const mongoose = require ("mongoose");
const yargs = require ("yargs");

const {createMovie,listMovies, updateMovies, deleteMovies} = require ("./movie/movieFunctions");


const app = async (yargsObject) => {
    try{
        if(yargsObject.add){
            await createMovie({title: yargsObject.title, actor: yargsObject.actor})
            console.log("Success")
            console.log(await listMovies())
        }else if (yargsObject.list){
            console.log(await listMovies())
        }else if (yargsObject.update){
            await updateMovies({title:yargsObject.title, actor:yargsObject.actor},{title:yargsObject.newTitle, actor: yargsObject.newActor})
            console.log("Updating")
            console.log(await listMovies())
        }else if (yargsObject.delete){
            console.log(`Deleting ${yargsObject.title}`)
            await deleteMovies({title:yargsObject.title, actor:yargsObject.actor})
            console.log(await listMovies())
        }
        else {
            console.log("Not a command")
        };
        await mongoose.disconnect();
    }catch (error){
        console.log(error)
        await mongoose.disconnect();
    };
}  ;
app(yargs.argv)