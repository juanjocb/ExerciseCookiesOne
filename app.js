const express = require('express')
const app = express()

const port = 1500

// app.get('/', (req, res) => {

//       let cookieConfig = {
//         domain: 'localhost', path: '/', secure: false,
//         expires: new Date(Date.now() + 300000), httpOnly: true
//       }

//       return res.status(200).cookie('token', "oqLlmSRa5j3Y8YEYRs", cookieConfig)
//           .json({ 
//             status: 'Successful authentication', auth: true
//           });
// })

app.post('/:login', (req, res) => {

    let cookieConfig = {
        domain: 'localhost', path: '/perfil', secure: false,
        expires: new Date(Date.now() + 300000), httpOnly: true
      }

      return res.status(200).cookie('correo', "adso321_2@gmail.com", cookieConfig)
          .json({ 
            status: 'Successful authentication', auth: true
          });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})