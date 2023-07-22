describe('Тестирование покупки', function () {
   it('Добавление товара и оформление заказа', function () {
        cy.visit('https://huntingpony.com/');                                       // Заходим на сайт
        cy.get('[href="/collection/lezhanki"] > .banner-list__item-title').click(); // Заходим в катоалог
        cy.get('[data-product-id="338933592"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click(); // Заходим в карточку товара
        cy.wait(5000);                                                              // Ожидание для подгрузки страницы
        cy.get('.add-cart-counter__btn-label').click();                             // Добавляем товар в корзину
        cy.get('.header__cart > .icon').click();                                    // Переходим в корзину
        cy.get('.cart-controls > .button').click();                                 // Нажимаем оформить заказ
        cy.contains('Оформление заказа').should('be.visible');                      // Проверяем что перешел на страницу Оформления по наличию Фразы
   })
})