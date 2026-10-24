'use strict';

//1---------------------------------------------------------
/*
 * У Sunny Coffee доставка безкоштовна від 500, інакше коштує 50.
 * 1. Оголоси змінну orderSum зі значенням суми замовлення 300.
 * 2. За допомогою if перевір: якщо orderSum менше 500,
 *    додай до orderSum вартість доставки 50.
 * 3. Виведи orderSum у консоль.
 */

// Твій код тут

// let orderSum = 300;

// if (orderSum < 500) {
//   orderSum += 50;
// }

// console.log(orderSum);

//2--------------------------------------------------------
/*
 * У клініці SmileCare пацієнтів ділять на дорослих і дитячих за віком.
 * 1. Оголоси змінну age зі значенням віку пацієнта 25.
 * 2. Оголоси змінну category.
 * 3. За допомогою if...else перевір: якщо age >= 18,
 *    признач category значення "adult", інакше — "child".
 * 4. Виведи category у консоль.
 */

// Твій код тут

// const age = 25;
// let category;

// if (age >= 18) {
//   category = 'adult';
// } else {
//   category = 'child';
// }

// console.log(category);

//3---------------------------------------------------------
/*
 * Магазину потрібно перевіряти замовлення перед оформленням.
 * Є два значення: скільки товару доступно на складі й скільки замовлено.
 * 1. Оголоси змінну available зі значенням 100 (доступно на складі).
 * 2. Оголоси змінну ordered зі значенням 130 (кількість у замовленні).
 * 3. Оголоси змінну message.
 * 4. За допомогою if...else if...else признач message:
 *    - якщо ordered дорівнює 0 — "There are no products in the order!";
 *    - якщо ordered більше за available —
 *      "Your order is too large, there are not enough items in stock!";
 *    - інакше — "The order is accepted, our manager will contact you".
 * 5. Виведи message у консоль.
 */

// Твій код тут

// const available = 100;
// const ordered = 130;
// let message;

// if (ordered === 0) {
//   message = 'There are no products in the order!';
// } else if (ordered > available) {
//   message = 'Your order is too large, there are not enough items in stock!';
// } else {
//   message = 'The order is accepted, our manager will contact you';
// }

// console.log(message);

//4----------------------------------------------------------------
/*
 * У Sunny Coffee вартість доставки залежить від суми замовлення.
 * 1. Оголоси функцію getDeliveryPrice з параметром orderSum.
 * 2. За допомогою if...else if...else поверни з функції вартість доставки:
 *    - якщо orderSum не менше 500 — доставка безкоштовна, поверни 0;
 *    - якщо orderSum не менше 200 — поверни 30;
 *    - інакше — поверни 50.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function getDeliveryPrice(orderSum) {
//   if (orderSum >= 500) {
//     return 0;
//   } else if (orderSum >= 200) {
//     return 30;
//   } else {
//     return 50;
//   }
// }

// console.log(getDeliveryPrice(600)); // 0
// console.log(getDeliveryPrice(300)); // 30
// console.log(getDeliveryPrice(150)); // 50

//5--------------------------------------------------------------
/*
 * Функція перевіряє пароль користувача й повідомляє про результат.
 * Правильний пароль уже збережено у змінній correctPassword.
 * 1. Оголоси функцію checkPassword з параметром password.
 * 2. За допомогою тернарного оператора поверни з функції:
 *    - "Access granted", якщо password збігається з correctPassword;
 *    - "Access denied, wrong password!" — в іншому випадку.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// const correctPassword = 'jqueryismyjam';

// // Твій код тут

// function checkPassword(password) {
//   return correctPassword === password
//     ? 'Access granted'
//     : 'Access denied, wrong password!';
// }

// console.log(checkPassword('jqueryismyjam')); // Access granted
// console.log(checkPassword('angul4r1sl1f3')); // Access denied, wrong password!
// console.log(checkPassword('r3actsux')); // Access denied, wrong password!

//6--------------------------------------------------------------
/*
 * Сервіс має три типи передплати, у кожного своя ціна в кредитах.
 * 1. Оголоси функцію getSubscriptionPrice з параметром type.
 * 2. За допомогою switch поверни з функції ціну залежно від type:
 *    - "starter" — 0;
 *    - "professional" — 20;
 *    - "organization" — 50;
 *    - будь-яке інше значення — "Invalid subscription type!".
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function getSubscriptionPrice(type) {
//   switch (type) {
//     case 'starter':
//       return 0;
//     case 'professional':
//       return 20;
//     case 'organization':
//       return 50;
//     default:
//       return 'Invalid subscription type!';
//   }
// }

// console.log(getSubscriptionPrice('starter')); // 0
// console.log(getSubscriptionPrice('professional')); // 20
// console.log(getSubscriptionPrice('organization')); // 50
// console.log(getSubscriptionPrice('premium')); // Invalid subscription type!

//7---------------------------------------------------------------------
/*
 * У Sunny Coffee безкоштовна доставка лише для постійних клієнтів
 * з великим замовленням.
 * 1. Оголоси функцію getDeliveryPrice з двома параметрами:
 *    isMember (чи постійний клієнт) і orderSum (сума замовлення).
 * 2. За допомогою if...else поверни вартість доставки:
 *    - якщо клієнт постійний І сума замовлення не менша за 500 —
 *      доставка безкоштовна, поверни 0;
 *    - інакше — поверни 30.
 *    Обидві умови поєднай через &&.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function getDeliveryPrice(isMember, orderSum) {
//   if (isMember && orderSum >= 500) {
//     return 0;
//   } else {
//     return 30;
//   }
// }

// console.log(getDeliveryPrice(true, 600)); // 0
// console.log(getDeliveryPrice(true, 300)); // 30
// console.log(getDeliveryPrice(false, 600)); // 30

//8----------------------------------------------------
/*
 * У клініці SmileCare огляд безкоштовний для дітей і пенсіонерів.
 * 1. Оголоси функцію getCheckupPrice з параметром age (вік пацієнта).
 * 2. За допомогою if...else поверни вартість огляду:
 *    - якщо вік менший за 18 АБО більший за 65 — огляд безкоштовний, поверни 0;
 *    - інакше — поверни 300.
 *    Обидві умови поєднай через ||.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function getCheckupPrice(age) {
//   if (age < 18 || age > 65) {
//     return 0;
//   } else {
//     return 300;
//   }
// }

// console.log(getCheckupPrice(12)); // 0
// console.log(getCheckupPrice(70)); // 0
// console.log(getCheckupPrice(35)); // 300

//9------------------------------------------------------
