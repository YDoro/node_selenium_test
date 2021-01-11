const express = require('express');
const postalCodeFinder = require('./src/services/postalcode');

const app = express();

app.get('/postalcode/:code', async (req, res) => {
    const code = req.params.code;
    try {
        const response = await postalCodeFinder(code);
        res.send({ address: response });
    } catch (e) {
        res.status(404).send({ message: 'postal code not found' });
    }
});
app.listen(process.env.PORT, console.log(process.env.APP_NAME + ' litening into: ' + process.env.PORT))
