import { socialMediaComments } from './comments.js';

console.log(socialMediaComments);



/*2. Создать массив чисел от 1 до 10.
Отфильтровать его таким образом,
что бы мы получил массив чисел, начиная с 5.*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.filter(number => number > 4);

console.log(newNumbers);



/*3. Создать массив строк, относящихся к любой сущности
(название фильмов/книг, кухонные приборы, мебель и т.д.),
проверить, есть ли в массиве какая-то определенная сущность.*/

const officeItems = ['laptop', 'fork', 'cup', 'notebook', 'carpet', 'hotkey'];

const newOfficeItems = officeItems.find(item => item === 'fork');

console.log(newOfficeItems);



/*4. Написать функцию, которая аргументом будет принимать массив
и изменять его порядок на противоположный ("переворачивать").
Два вышеуказанных массива с помощью этой функции перевернуть.*/

const reverseArray = array => {
  return array.reverse();
};

console.log(reverseArray(numbers));

console.log(reverseArray(officeItems));



/*7. Вывести в консоль массив тех комментариев,
почта пользователей которых содержит ".com"*/

const commentsWithComEmail = socialMediaComments.filter(user => user.email.includes('.com'));

console.log(commentsWithComEmail);



/*8. Перебрать массив таким образом,
что бы пользователи с id меньше или равно 5 имели postId: 2,
а те, у кого id больше 5, имели postId: 1*/

const updatedPostIds = socialMediaComments.map(user => ({ ...user, postId: user.id <= 5 ? 2 : 1}));

console.log(updatedPostIds);



/*9. Перебрать массив, что бы объекты
состояли только из айди и имени*/

const commentNames = socialMediaComments.map(user => ({
  id: user.id,
  name: user.name
}));

console.log(commentNames);



/*10. Перебираем массив,
добавляем объектам свойство isInvalid и проверяем:
если длина тела сообщения (body) больше 180 символов -
устанавливаем true, меньше - false.*/

const validatedComments = socialMediaComments.map(user => ({ ...user, isInvalid: user.body.length > 180}));

console.log(validatedComments);



/*11. Почитать про метод массива reduce.
Используя его, вывести массив почт
и провернуть тоже самое с помощью метода map*/

const commentEmailsByReduce = socialMediaComments.reduce((acc, user) => {
  acc.push(user.email);
  return acc;
}, []);

console.log(commentEmailsByReduce);


const commentEmailsByMap = socialMediaComments.map(user => ({
  email: user.email
}));

console.log(commentEmailsByMap);



/*12. Почитать про методы toString(), join()
и перебрав массив с задания №11, привести его к строке.*/

console.log(commentEmailsByReduce.toString());


const commentEmailsToString = commentEmailsByReduce.join();

console.log(commentEmailsToString);