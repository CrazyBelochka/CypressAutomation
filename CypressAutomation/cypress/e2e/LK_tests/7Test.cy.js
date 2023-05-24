describe('My 7 Test', () => {
    it('Verify title of the page pozitive', () => 
    {
      cy.visit('https://cabinet3.nationalpost.ru/')
      cy.title().should('eq','Кабинет клиента НПС')
  
  
    })
  
  
    it('Print few words', () =>
    {
      cy.visit('https://cabinet3.nationalpost.ru/')
      cy.get('input[type=text]').type('Web2')
      cy.get('input[type=password]').type('Sj123456')
      cy.contains('Войти').click()
      cy.contains('Создать').click()
      cy.get('select').eq(0).select('(1308) №Контракт 2 от 08/10/19')
      cy.get('select').eq(1).select('Бандероль заказная с уведомлением 100г-500г')
      cy.get('button[type = "submit"]').click()
  
      cy.contains('Создать').click()
      cy.get('select').eq(0).select('(1308) №Контракт 2 от 08/10/19')
      cy.get('select').eq(1).select('Бандероль заказная с уведомлением 100г-500г')
      cy.get('button[type = "submit"]').click()
  
      cy.contains('Создать').click()
      cy.get('select').eq(0).select('(1308) №Контракт 2 от 08/10/19')
      cy.get('select').eq(1).select('Бандероль заказная с уведомлением 100г-500г')
      cy.get('button[type = "submit"]').click()
  
      cy.contains('Создать').click()
      cy.get('select').eq(0).select('(1308) №Контракт 2 от 08/10/19')
      cy.get('select').eq(1).select('Бандероль заказная с уведомлением 100г-500г')
      cy.get('button[type = "submit"]').click()
  
      cy.contains('Создать').click()
      cy.get('select').eq(0).select('(1308) №Контракт 2 от 08/10/19')
      cy.get('select').eq(1).select('Бандероль заказная с уведомлением 100г-500г')
      cy.get('button[type = "submit"]').click()
  
      cy.contains('Создать').click()
      cy.get('select').eq(0).select('(1308) №Контракт 2 от 08/10/19')
      cy.get('select').eq(1).select('Бандероль заказная с уведомлением 100г-500г')
      cy.get('button[type = "submit"]').click()
  
      cy.contains('Создать').click()
      cy.get('select').eq(0).select('(1308) №Контракт 2 от 08/10/19')
      cy.get('select').eq(1).select('Бандероль заказная с уведомлением 100г-500г')
      cy.get('button[type = "submit"]').click()
  
      cy.contains('Создать').click()
      cy.get('select').eq(0).select('(1308) №Контракт 2 от 08/10/19')
      cy.get('select').eq(1).select('Бандероль заказная с уведомлением 100г-500г')
      cy.get('button[type = "submit"]').click()
    })
  
    it('Works with operations', () =>
    {
      cy.visit('https://cabinet3.nationalpost.ru/')
      cy.get('input[type=text]').type('Web2')
      cy.get('input[type=password]').type('Sj123456')
      cy.contains('Войти').click()
      cy.get('input[type=text]').eq(2).type('9512238{enter}')
      cy.get('button[type = "button"]').eq(11).click()
      cy.contains('Добавить отправление').click()
      cy.get('input[type=text]').eq(5).type('Ромашка{enter}')
      cy.get('input[class]').eq(12).type('Широкая')
      cy.get('input[class]').eq(13).type('3')
      //cy.get('input[type=text]').eq(6).type('ООО').wait(3000).type('{enter}')
      cy.get('input[type=text]').eq(6).type('ООО')
      cy.contains('ООО Тестовая компания номер один').click()
      cy.get('button[type = "submit"]').eq(0).click()
    })
  
    it('Works with seeing reestrs', () =>
    {
      cy.visit('https://cabinet3.nationalpost.ru/')
      cy.get('input[type=text]').type('Web2')
      cy.get('input[type=password]').type('Sj123456')
      cy.contains('Войти').click()
      cy.wait(2000)
      cy.get('button[type = "button"]').eq(0).click()
      cy.contains('2023').click()
      cy.contains('2022').click()
      cy.contains('янв.').click()
      cy.get('button[type = "button"]').eq(12).click()
      cy.get('button[type = "button"]').eq(2).click()
      cy.wait(5000)
      cy.get('span').eq(15).click()
      cy.wait(3000)
      cy.get('li[class = "mud-pagination-item"]').eq(10).click()
      cy.get('li[class = "mud-pagination-item"]').eq(10).click()
      cy.get('li[class = "mud-pagination-item"]').eq(10).click()
      cy.get('li[class = "mud-pagination-item"]').eq(10).click()
      cy.get('li[class = "mud-pagination-item"]').eq(10).click()
      cy.get('li[class = "mud-pagination-item"]').eq(10).click()
      cy.get('li[class = "mud-pagination-item"]').eq(10).click()
      cy.get('li[class = "mud-pagination-item"]').eq(10).click()
      cy.get('li[class = "mud-pagination-item"]').eq(10).click()
      
    })
  
    })