import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = addedName =>
  toast.warn(`"${addedName}" is already in contacts`);

export const patternName =
  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$";

export const patternNumber =
"^[0-9-]+$";

export const errorName = 'Name may contain only letters, apostrophe and spaces';

export const errorNumber = "Phone number must be digits and can contain spaces, dashes, parentheses and can start with +";
