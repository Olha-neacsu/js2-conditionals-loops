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
/*
 * У Sunny Coffee пропозиція «Замовити ще» показується, лише коли
 * кав'ярня відкрита і це не перше замовлення клієнта.
 * 1. Оголоси функцію getReorderMessage з двома параметрами:
 *    isOpen (чи відкрита кав'ярня) і isFirstOrder (чи перше замовлення).
 * 2. За допомогою if...else поверни повідомлення:
 *    - якщо кав'ярня відкрита І замовлення НЕ перше — поверни "Order again?";
 *    - інакше — поверни "No offer".
 *    Для умови «не перше» використай оператор !.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function getReorderMessage(isOpen, isFirstOrder) {
//   if (isOpen && !isFirstOrder) {
//     return 'Order again?';
//   } else {
//     return 'No offer';
//   }
// }

// console.log(getReorderMessage(true, false)); // Order again?
// console.log(getReorderMessage(true, true)); // No offer
// console.log(getReorderMessage(false, false)); // No offer

//10------------------------------------------------------
/*
 * Функція приводить рядок до потрібного регістру.
 * 1. Оголоси функцію normalizeInput з двома параметрами:
 *    input (рядок для перетворення) і to (режим: "upper" або "lower").
 * 2. Поверни з функції:
 *    - якщо to дорівнює "upper" — рядок input у верхньому регістрі;
 *    - інакше — рядок input у нижньому регістрі.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function normalizeInput(input, to) {
//   return to === 'upper' ? input.toUpperCase() : input.toLowerCase();
// }

// console.log(normalizeInput('Big SALE', 'lower')); // big sale
// console.log(normalizeInput('Big SALE', 'upper')); // BIG SALE
// console.log(normalizeInput('Hello World', 'upper')); // HELLO WORLD

//11--------------------------------------------------------
/*
 * Функція перевіряє, чи міститься ім'я в повному імені.
 * Регістр введених рядків наперед не відомий, тому порівнювати
 * потрібно без огляду на регістр.
 * 1. Оголоси функцію containsName з двома параметрами:
 *    fullName (повне ім'я) і firstName (ім'я для пошуку).
 * 2. Зведи обидва рядки до нижнього регістру через toLowerCase().
 * 3. Поверни результат перевірки: чи містить fullName підрядок firstName
 *    (використай includes()).
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function containsName(fullName, firstName) {
//   const lowerFullName = fullName.toLowerCase();
//   const lowerFirstName = firstName.toLowerCase();
//   return lowerFullName.includes(lowerFirstName);
// }

// console.log(containsName('Jason Neis', 'Jason')); // true
// console.log(containsName('Jason Neis', 'jAsOn')); // true
// console.log(containsName('Jason Neis', 'Jacob')); // false

//12--------------------------------------------------------
/*
 * Функція перевіряє, чи має файл потрібне розширення.
 * 1. Оголоси функцію checkFileExtension з двома параметрами:
 *    fileName (ім'я файлу з розширенням) і extension (розширення для перевірки).
 * 2. За допомогою if...else поверни повідомлення:
 *    - якщо fileName закінчується на extension — "File extension matches";
 *    - інакше — "File extension does not match".
 *    Для перевірки закінчення використай endsWith().
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function checkFileExtension(fileName, extension) {
//   if (fileName.endsWith(extension)) {
//     return 'File extension matches';
//   } else {
//     return 'File extension does not match';
//   }
// }

// console.log(checkFileExtension('styles.css', '.css')); // File extension matches
// console.log(checkFileExtension('styles.css', '.js')); // File extension does not match
// console.log(checkFileExtension('app.js', '.js')); // File extension matches

//13------------------------------------------------------------------
/*
 * Дата народження зберігається у форматі "РРРР-ММ-ДД", наприклад "2024-03-15".
 * Рік — це перші чотири символи рядка.
 * 1. Оголоси функцію getBirthYearMessage з параметром birthDate.
 * 2. За допомогою slice() візьми рік — перші чотири символи birthDate —
 *    і збережи його у змінну year.
 * 3. Поверни рядок виду "You were born in <рік>".
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут
// function getBirthYearMessage(birthDate) {
//   const year = birthDate.slice(0, 4);
//   return `You were born in ${year}`;
// }

// console.log(getBirthYearMessage('2024-03-15')); // You were born in 2024
// console.log(getBirthYearMessage('1998-12-01')); // You were born in 1998
// console.log(getBirthYearMessage('2010-07-20')); // You were born in 2010

//14---------------------------------------------------------------------
/*
 * Функція рахує суму всіх цілих чисел від 1 до заданого числа включно.
 * Наприклад, для 3 це 1 + 2 + 3 = 6.
 * 1. Оголоси функцію sumUpTo з параметром number.
 * 2. Створи змінну count зі значенням 1 (поточне число)
 *    і змінну total зі значенням 0 (сума).
 * 3. За допомогою while, поки count не більше за number:
 *    - додай count до total;
 *    - збільш count на 1.
 * 4. Поверни total.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function sumUpTo(number) {
//   let count = 1;
//   let total = 0;

//   while (count <= number) {
//     total += count;
//     count += 1;
//   }
//   return total;
// }

// console.log(sumUpTo(3)); // 6
// console.log(sumUpTo(5)); // 15
// console.log(sumUpTo(0)); // 0

//15----------------------------------------------------------------------
/*
 * У програмі лояльності Sunny Coffee за 1-ше замовлення клієнт отримує
 * 1 бал, за 2-ге — 2 бали, за 3-тє — 3, і так далі.
 * 1. Оголоси функцію getLoyaltyPoints з параметром orders
 *    (кількість замовлень клієнта).
 * 2. Створи змінну total зі значенням 0 (сума балів).
 * 3. Циклом for пройди номери замовлень від 1 до orders включно
 *    і додай кожен номер до total.
 * 4. Поверни total.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function getLoyaltyPoints(orders) {
//   let total = 0;
//   for (let i = 1; i <= orders; i += 1) {
//     total += i;
//   }
//   return total;
// }

// console.log(getLoyaltyPoints(3)); // 6
// console.log(getLoyaltyPoints(5)); // 15
// console.log(getLoyaltyPoints(0)); // 0

//16-----------------------------------------------------------
/*
 * Функція шукає перше число в проміжку від start до end,
 * яке ділиться на 5 без залишку.
 * 1. Оголоси функцію findMultiple з параметрами start і end.
 * 2. Створи змінну number — сюди запишемо результат.
 * 3. Циклом for пройди числа від start до end. Якщо чергове число
 *    ділиться на 5 без залишку (i % 5 === 0) — збережи його в number
 *    і перерви цикл оператором break.
 * 4. Поверни number.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// твій код

// function findMultiple(start, end) {
//   let number;
//   for (let i = start; i <= end; i += 1) {
//     if (i % 5 === 0) {
//       number = i;
//       break;
//     }
//   }
//   return number;
// }

// console.log(findMultiple(6, 17)); // 10
// console.log(findMultiple(17, 25)); // 20
// console.log(findMultiple(2, 11)); // 5

//17------------------------------------------------------
/*
 * Функція шукає перше число в діапазоні від start до end включно,
 * яке ділиться на divisor без остачі. Оператор break не використовуй.
 * 1. Оголоси функцію findDivisible з параметрами start, end і divisor.
 * 2. Циклом for пройди числа від start до end включно.
 * 3. Якщо чергове число ділиться на divisor без остачі (i % divisor === 0),
 *    одразу поверни його через return — це завершить і цикл, і функцію.
 * Виклики функції вже додані нижче — після написання перевір результат у консолі.
 */

// Твій код тут

// function findDivisible(start, end, divisor) {
//   for (let i = start; i <= end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findDivisible(2, 6, 5)); // 5
// console.log(findDivisible(8, 17, 3)); // 9
// console.log(findDivisible(16, 35, 7)); // 21

//18-------------------------------------------------------
