# Client e server su Node.js

In questa repository trovate 2 file:

- `server.js`: script che crea un server HTTP in ascolto sulla porta 8000, utilizzando il modulo [express](https://expressjs.com/it/)
- `client.js`: script che esegue una chiamata HTTP in GET al server, utilizzando il modulo [axios](https://www.npmjs.com/package/axios)

Per avviare il server, eseguire il comando `node server.js` da terminale. Aprire un altro terminale e avviare il client con il comando `node client.js`.

## express

Express è un framework per Node.js che permette di creare server HTTP in modo semplice e veloce.

Analizziamo questo esempio di codice:

```javascript
    const express = require('express')
    const app = express()

    app.get('/ciao', (req, res) => {
        res.send('Ciao!')
    })

    app.listen(8000, () => {
        console.log('Server in ascolto sulla porta 8000')
    })
```

Qui è stato creato un server HTTP che risponde a richieste in GET all'indirizzo `/ciao` con la stringa "Ciao!".

Il server è in ascolto sulla porta 8000, di conseguenza per accedere alla route `/ciao` bisogna fare una richiesta HTTP in GET all'indirizzo `http://localhost:8000/ciao`.

Il metodo `.get(PERCORSO, CALLBACK)` permette di definire una route che risponde alle chiamate in GET, e accetta come argomenti il percorso della route e una funzione di callback che verrà eseguita quando il server riceve una richiesta in GET all'indirizzo specificato.

La funzione di callback accetta 2 argomenti:
- `req`: oggetto che rappresenta la richiesta HTTP
- `res`: oggetto che rappresenta la risposta HTTP

## Chiamate asincrone - Promise

Le chiamate HTTP sono asincrone, di conseguenza il client deve attendere la risposta del server. 

Per gestire delle operazioni asincrone in JavaScript, si utilizzano le Promise.

Una Promise rappresenta un'operazione asincrona che può avere 3 stati:
- pending: in attesa
- fulfilled: completata con successo
- rejected: completata con errore

Si può attendere il completamento di una Promise in 2 modi:

- `.then()` e `.catch()`
- `async` e `await`

### Esempio con `.then()` e `.catch()`

Il metodo `.then()` applicato ad una Promise accetta una funzione di callback che verrà eseguita quando la Promise è completata con successo, e riceverà come argomento il valore restituito dalla Promise stessa.

Il metodo `.catch()` accetta una funzione di callback che verrà eseguita quando la Promise è completata con errore, e riceverà come argomento l'errore restituito dalla Promise stessa.

```javascript
    const chiamataHTTP = axios.get('http://localhost:8000')

    chiamataHTTP
        .then(response => {
            // la chiamata è andata a buon fine, response contiene i dati restituiti dal server
            console.log(response)
        })
        .catch(error => {
            // si è verificato un errore durante la chiamata, error contiene l'errore
            console.error(error)
        })
```

### Esempio con `async` e `await`

L'operatore `await` può essere utilizzato all'interno di una funzione `async` per attendere il completamento di una Promise. In questo modo stiamo emulando un comportamento sincrono, in quanto il codice successivo all'istruzione `await` verrà eseguito solo dopo che la Promise è stata completata.

Si può utilizzare il costrutto `try...catch` per gestire gli errori.

```javascript
    async function main() {
        try {
            const response = await axios.get('http://localhost:8000')
            // la chiamata è andata a buon fine, response contiene i dati restituiti dal server
            console.log(response)
        } catch (error) {
            // si è verificato un errore durante la chiamata, error contiene l'errore
            console.error(error)
        }
    }

    main()
```