# Hearthstone Project

![](https://d2q63o9r0h0ohi.cloudfront.net/images/common/hs-gen-logo-lg-c05665a3596018f766422e2ff67d57de236e5efe3b3d88a23b46329d26ad8290f74873b482da2cb7d365750f374bc80c39589ff54a488ef8c590d7ecbc673f21.jpg)

# `React`

- Есть _рендеринг списков_ <br>
  [CardList](https://github.com/unknown-cat/hearthstone-api/blob/main/src/components/CardList/CardList.jsx)

```JSX
  return (
    <section className={s.cardList}>
      {cards.map(({ ...props }) => (
        <Card key={props.cardId} props={props} />
      ))}
    </section>
  );

```

- Реализована хотя бы одна _форма_ <br>
  [**LoginForm**](https://github.com/unknown-cat/hearthstone-api/blob/main/src/components/LoginForm/LoginForm.jsx)

- Есть применение _Контекст API_ <br>
  [**Context API**](https://github.com/unknown-cat/hearthstone-api/tree/feature/context)

- Есть применение _предохранителя_ <br>
  [**ErrorBoundary**](https://github.com/unknown-cat/hearthstone-api/tree/feature/error-boundary)

- Есть хотя бы один _кастомный хук_ <br>
  [**useLocalStorage**](https://github.com/unknown-cat/hearthstone-api/blob/main/src/hooks/useLocalStorage.js)

- Хотя бы несколько компонентов используют <br> _PropTypes_. <br>
  [**Card**](https://github.com/unknown-cat/hearthstone-api/blob/feature/prop-types/src/components/Card/Card.jsx),<br>
  [**CardList.jsx**](https://github.com/unknown-cat/hearthstone-api/blob/feature/prop-types/src/components/CardList/CardList.jsx)

- Поиск не должен триггерить много запросов к серверу

# `Redux`

- Используем Modern Redux with Redux Toolkit <br>

```JSX
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [cardsApi.reducerPath]: cardsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([cardsApi.middleware])
});
```

- Используем слайсы <br>
  [**userSlice**](https://github.com/unknown-cat/hearthstone-api/blob/main/src/features/user/userSlice.jsx)
- Есть хотя бы одна кастомная мидлвара <br>
  [**localStorageMiddleware**](https://github.com/unknown-cat/hearthstone-api/blob/main/src/authMiddleware.js)
- Используется _RTK Query_ <br>
  [**RTK QUERY**](https://github.com/unknown-cat/hearthstone-api/commit/9eea85fbae0153b0cfd1f894d82a4ec4dbd4cefe)
- Используется Transforming Responses
