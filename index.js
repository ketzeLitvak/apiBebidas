const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send(JSON.stringify({
        "bebidas": [
            { "id": 1, "nombre": "Blue Label", "genero": "whiskey", "desc": "Es una mezcla exquisita hecha con algunos de los whiskies más raros y excepcionales de Escocia.", "precio": 44000, "img": "./img/bluelabel.jpg" },
            { "id": 2, "nombre": "Absolut", "genero": "vodka", "desc": "es una de las bebidas alcohólicas qué en comparación con las demás, no cuenta con azúcar añadida y sus ingredientes son naturales.", "precio": 2690, "img": "./img/absolut.png" },
            { "id": 3, "nombre": "Jägermeister", "genero": "otro", "desc": "es un licor de hierbas endulzado, pero con un dejo amargo, el cual tiene 34,5% de contenido alcohólico. Es muy popular en Baja Sajonia en la ciudad de Wolfenbüttel (Alemania).", "precio": 5400, "img": "./img/jagger.jpg" },
            { "id": 4, "nombre": "Red Label", "genero": "whiskey", "desc": "un perfil dinámico de especias aromáticas canela y pimienta, una dulzura frutal manzana fresca o pera y notas de vainilla", "precio": 4000, "img": "./img/redlabel.jpg" },
            { "id": 5, "nombre": "Smirnoff", "genero": "vodka", "desc": "granos seleccionados, que se mezclan con agua desmineralizada y filtrada. Es obtenido por triple de destilación del alcohol de grano y filtrado en hasta diez ocasiones por carbón vegetal (charcoal).", "precio": 1000, "img": "./img/smirnoff.png" },
            { "id": 6, "nombre": "Jack Daniel's", "genero": "whiskey", "desc": "whiskey Tennesse, y este tipo de destilado se diferencia en que su elaboración se filtra a través de carbon de madera de arce.", "precio": 6000, "img": "./img/jackdanields.jpg" }
        ]
    }))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
