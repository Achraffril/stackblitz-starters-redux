import React, { useContext } from 'react';
import { UserContext, UserLanguage } from '../App';
export const Component2 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <>
        <fieldset>
          <legend>Compopent 2</legend>
          <h1>{user}</h1>
          <Component3 />
        </fieldset>
      </>
    </>
  );
};
export const Component3 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <fieldset>
        <legend>Component 3</legend>
        <h3>{user}</h3>
        <Component4 />
      </fieldset>
    </>
  );
};
export const Component4 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <fieldset>
        <legend>Component 3</legend>
        <h4>{user}</h4>
        <Component5 />
      </fieldset>
    </>
  );
};
export const Component5 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <fieldset>
        <legend>Component 3</legend>
        <h5>{user}</h5>
        <Component6 />
      </fieldset>
    </>
  );
};
export const Component6 = () => {
  const user = useContext(UserContext);
  return (
    <>
      <fieldset>
        <legend>Component 3</legend>
        <h6>{user}</h6>
      </fieldset>
    </>
  );
};
const texts = [
  {
    lang: 'EN',
    greeting: 'Hello',
    copyright: '2024 Website . All rights reserved.',
  },
  {
    lang: 'FR',
    greeting: 'Bonjour',
    copyright: '2024 Nom de votre site Web. Tous droits réservés.',
  },
  {
    lang: 'AR',
    greeting: 'مرحبااااا',
    copyright: '2024 موقع الويب . كل الحقوق محفوظة.',
  },
];
export const Greeting = () => {
  const language = useContext(UserLanguage);
  const text = texts.filter((item) => item.lang == language);

  return (
    <fieldset style={{ textAlign: `${language == 'AR' ? 'right' : ''}` }}>
      <legend>{language == 'AR' ? 'تحية' : 'Greeting'}</legend>
      {text.map((item) => {
        return <h1> {item.greeting}</h1>;
      })}
    </fieldset>
  );
};
export const Footer = () => {
  const language = useContext(UserLanguage);
  const text = texts.filter((item) => item.lang == language);
  return (
    <>
      <div class="footer">
        {text.map((item) => {
          return <p>&copy; {item.copyright}</p>;
        })}
      </div>
    </>
  );
};
