import throttle from "lodash.throttle";

const formRef = document.querySelector('.feedback-form');
const STOREGE_KEY = 'feedback-form-state';

import { save, load, remove} from './storage';

initPage();

formRef.addEventListener('submit', onFormSubmit);
formRef.addEventListener('input', throttle(onFormInput, 500));

function onFormInput (evt) {
    const { name, value} = evt.target;
        let saveData = load(STOREGE_KEY);
        saveData = saveData ? saveData : {};
    saveData[name] = value;
    save(STOREGE_KEY, saveData)
};

function initPage () {
    const saveData = load(STOREGE_KEY);
    if (!saveData) {
        return;
      }
      Object.entries(saveData).forEach(([name, value]) => {
        formRef.elements[name].value = value;
      });
    }


function onFormSubmit (evt) {
    evt.preventDefault();
    console.log(JSON.parse(localStorage.getItem(STOREGE_KEY)));
    evt.currentTarget.reset()
    remove(STOREGE_KEY);
    
};



