const supertest = require("supertest");

const express = require("express");

const app = express();

app.get("/user", function(req, res) {
  res.status(200).json({ name: "Marcus Dantas" });
});

const testServer = supertest(app);

describe('Teste de verificação de nome', function() {
    it('Verificando se o retorno será Marcus Dantas', function(done) {
        testServer
            .get('/user')
            .expect(200)
            .expect('Content-type', /application\/json/)
            .expect({
                name: 'Marcus Dantas'
            })
            .end(done);
    });
});


