const { SiteClient } = require('datocms-client');
//const client = new SiteClient('4abcdac233ee6b95bb4e66c67b2c9b')

export default async function criaItem(request, response) {

    if(request.method === 'POST') {
        const client = new SiteClient('4abcdac233ee6b95bb4e66c67b2c9b')

        const registro = await client.items.create({
            itemType: '967548', //ID do Model DatoCMS
            ...request.body,
            // title: "Teste03",
            // imageUrl:"https://github.com/peas.png",
            // creatorSlug: "peas",
        });

        console.log(registro);

        response.json({
            dadosRnd: `Algum dado`,
            registroCriado: registro,
        })
        return;

    }

    response.status(404).json({
        message: 'Nada no GET. POST tem!',
    });
}

criaItem();