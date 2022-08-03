export const resetFormFields = (setData, defaultData) => setData(defaultData);

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user');

  try {
    const user = result ? JSON.parse(result) : { guest: true };
    return user;
  } catch (err) {
    console.error(err.message);
    return { guest: true };
  }
};

export const validate = (values) => {
  const { email: lsEmail, password: lsPassword } = getUserFromLocalStorage();
  const errors = {};

  if (!values.name) errors.name = 'User name is required';

  if (!values.email) errors.email = 'Enter Email';

  if (!values.password) errors.password = 'Enter Password';

  if (lsEmail && lsEmail !== values.email && values.email)
    errors.email = 'Wrong Email';

  if (lsPassword && lsPassword !== values.password && values.password)
    errors.password = 'Wrong Password';

  if (!lsEmail && values.email && !lsPassword && values.password) {
    errors.email = 'You are not register';
    errors.password = 'You are not register';
  }

  return errors;
};

export const currenDate = () => {
  const today = new Date();
  const date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  const time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return ' ' + date + ' ' + time;
};

export const clearText = ({text}) => {
  const bTagsXBracesRegex = /(\[x\])*(<b>)*(<\/b>)*/g;
  const newLineRegex = /\\n*/g;
  let newText = text;

  if (newText) {
    newText = newText.replace(bTagsXBracesRegex, '').replace(newLineRegex, ' ');
  }

  return newText;
};

export const transformKeysAndValues = (obj) => {
  return {
    Id: obj.cardId,
    Artist: obj.artist,
    Rarity: obj.rarity,
    Name: obj.name,
    'Spell School': obj.spellSchool,
    'Player Class': obj.playerClass,
    Set: obj.cardSet,
    Type: obj.type,
    Faction: obj.faction,
    Flavor: obj.flavor,
    Text: clearText(obj),
    'Image url': obj.img,
  };
};
