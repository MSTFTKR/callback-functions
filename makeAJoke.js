const axios=require('axios')


const makeAjoke=async()=>{
    try {
        const response = await axios.request({
            method:'get',
            url:'https://v2.jokeapi.dev/joke/Programming?type=single&blacklistFlags=nsfw,sexist',
            headers:{},
            timeout:2500
        })
        
        return response.data.joke
    } 

    catch (error) {
        throw new error('Gelmiyor Mafeles')
    }

}
module.export = makeAjoke
const makeAJoke=  require("./makeAJoke")


const main=()=>{

    makeAJoke()
}

main()