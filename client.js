const axios = require("axios")

const main = async() => {
    try {
        const response = await axios.get("http://localhost:8000/saluta", {
            params: {
                name: "Marco"
            }
        })

        console.log("chiamata conclusa")
        console.log("Risposta:", response.data)
    } catch (err) {
        console.log("Errore durante la chiamata", err)
    }
}

main()