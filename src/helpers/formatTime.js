import { format } from 'date-fns';


export function formatDateDMY(date) {
  return format(new Date(date), 'dd MMMM yyyy');
}
