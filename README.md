Выполни рефакторинг кода приложения «Книга контактов» добавив управление состоянием при помощи библиотеки Redux Toolkit. Пусть Redux-состояние, например, выглядит следующим образом.
```js
//Создай действия сохранения и удаления контакта, а также обновления фильтра
{
  contacts: [],
  filter: ""
}

"Используй функцию" createSlice()
```

Свяжи React-компоненты с Redux-логикой при помощи хуков бибилиотеки <react-redux>
Используй библиотеку <Redux Persist>
 для сохранения массива контактов в локальное хранилище


```js
 import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
```

<!-- https://react-hot-toast.com/ -->