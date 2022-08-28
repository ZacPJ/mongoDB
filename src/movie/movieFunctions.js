const { castObject } = require("./movieModel")
const Movie = require("./movieModel")

exports.createMovie = async (movieObject) => {
    try{
        await Movie.create(movieObject)
    }catch(error){
        console.log(error)
    }
}

exports.listMovies = async () => {
try{
    return await Movie.find({})
}catch(error){
    console.log(error)
}

}

exports.updateMovies = async (toUpdate,newData) =>{
    try{
        console.log(toUpdate)
        console.log(newData)
        await Movie.findOneAndUpdate(toUpdate,newData, {new:true})
    }catch(error){
        console.log(error)
    }
}

exports.deleteMovies = async (toDelete) =>{
    try{
    await Movie.findOneAndDelete(toDelete)
    }catch(error){
        console.log(error)
    }
}