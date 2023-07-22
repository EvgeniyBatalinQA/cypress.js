
describe('Тестирование формы пароля и логина', function () {
   it('Ввод правильного логина и пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');                     // верный логин
        cy.get('#pass').type('iLoveqastudio1');                         // верный пароль
        cy.get('#loginButton').click();                                 // нажатие на кнопку войти
        cy.contains('Авторизация прошла успешно').should('be.visible'); // Проверка наличия и видимости текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');  // Видимость крестика
   })

   it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton').click();                                   // нажатие на кнопку забыл пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');                       // ввод емэйла 
        cy.get('#restoreEmailButton').click();                                  // нажатие на кнопку забыл пароль
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); // Проверка наличия и видимости текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');          // Видимость крестика

    })
   it('Не правильный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');                        // верный логин
        cy.get('#pass').type('wrongPass');                                 // НЕ верный пароль
        cy.get('#loginButton').click();                                    // нажатие на кнопку войти
        cy.contains('Такого логина или пароля нет').should('be.visible');  // Проверка наличия и видимости текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     // Видимость крестика

    })
   it('Не правильный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('wrong@dolnikov.ru');                         // НЕ верный логин
        cy.get('#pass').type('iLoveqastudio1');                            // Верный пароль
        cy.get('#loginButton').click();                                    // нажатие на кнопку войти
        cy.contains('Такого логина или пароля нет').should('be.visible');  // Проверка наличия и видимости текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');     // Видимость крестика

    })
   it(' Логин с разным регистром', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');                              // Логин с разным регистром
        cy.get('#pass').type('iLoveqastudio1');                                  // Верный пароль
        cy.get('#loginButton').click();                                          // нажатие на кнопку войти
        cy.contains('Нужно исправить проблему валидации').should('be.visible');  // Проверка наличия и видимости текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');           // Видимость крестика

    })
})
