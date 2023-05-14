describe('MyTestSuit', () => 
{
    
    it('Works with operations', () =>
    {
      cy.visit('https://cabinet3.nationalpost.ru/')
      cy.get('input[type=text]').type('Web2')
      cy.get('input[type=password]').type('Sj123456')
      cy.contains('Войти').click()
      cy.wait(2000)
      cy.get('a[href="findletters"]').click()
      cy.get('select').eq(0).select('Комментарий')
      cy.get('input[type=text]').type('22{enter}')
      cy.wait(2000)
      cy.get('a[href="findletters"]').click()
      cy.get('select').eq(0).select('Штрихкод')
      cy.get('input[type=text]').type('85000000390305{enter}')
      cy.wait(2000)
      cy.get('a[href="findletters"]').click()
      cy.get('select').eq(0).select('Получатель')
      cy.get('input[type=text]').type('Транзит{enter}')
      cy.wait(2000)


      cy.get('a[href="findletters"]').click()
      cy.get('select').eq(0).select('Комментарий')
      cy.get('input[type=text]').type('2-2/1-407/23{enter}')
      cy.wait(2000)
      cy.get('a[href="findletters"]').click()
      cy.get('select').eq(0).select('Штрихкод')
      cy.get('input[type=text]').type('85000000402674{enter}')
      cy.wait(2000)
      cy.get('a[href="findletters"]').click()
      cy.get('select').eq(0).select('Получатель')
      cy.get('input[type=text]').type('Тестовая{enter}')

      cy.get('a[href="profileuser"]').click()
    })




  })