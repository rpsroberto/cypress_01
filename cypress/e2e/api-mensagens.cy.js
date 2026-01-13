describe('Api Adopet', () => {
    const tempoEsperado = Math.random() *1000
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyODczYmNiZC1hMGE1LTRlMDAtOWIzMC01NWNlM2IxMDViYjMiLCJhZG9wdGVyTmFtZSI6IlJvYmVydG8gU2lsdmEiLCJpYXQiOjE3NjgyNDU2MzgsImV4cCI6MTc2ODUwNDgzOH0.CYoEIieuIHQeuLpVFHwUcKXimQdt6aXR0rnNSU_Tuck'
     
     it('Mensagens da API', () => {
            cy.request({
             method: 'GET' ,
             url: 'https://adopet-api-i8qu.onrender.com/mensagem/2873bcbd-a0a5-4e00-9b30-55ce3b105bb3',
             headers: { authorization }
                   
                }).then((res) => {
                    expect(res.status).to.be.equal(200)
                    expect(res.body).is.not.empty
                    expect(res.body).to.have.property('msg')
                    expect(res.duration).to.be.lte(tempoEsperado)
                    
                })
    })
})


    










    