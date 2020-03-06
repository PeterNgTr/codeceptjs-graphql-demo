const {expect} = require('chai');

Feature('GraphQL Acceptance Tests');

Scenario('Send query to GraphQL endpoint over http', async (I) => {
    const response = await I.sendQuery('query {stationWithEvaId(evaId: 8000108) { name location { latitude longitude } picture { url }}}');
    expect(response.data.data.stationWithEvaId.name).to.equal('Freilassing');
    expect(response.data.data.stationWithEvaId.location).to.deep.equal({ latitude: 47.836916, longitude: 12.977193 });
    expect(response.data.data.stationWithEvaId.picture.url).to.equal('https://api.railway-stations.org/photos/de/1906.jpg');
});

Scenario('Send query to GraphQL endpoint over http - with variables', async (I) => {
    const response = await I.sendQuery('query stationWithEvaId($evaId: Int!) { stationWithEvaId(evaId: $evaId) { name location { latitude longitude } picture { url }} }', { "evaId": 8000108 } );
    expect(response.data.data.stationWithEvaId.name).to.equal('Freilassing');
    expect(response.data.data.stationWithEvaId.location).to.deep.equal({ latitude: 47.836916, longitude: 12.977193 });
    expect(response.data.data.stationWithEvaId.picture.url).to.equal('https://api.railway-stations.org/photos/de/1906.jpg');
});
