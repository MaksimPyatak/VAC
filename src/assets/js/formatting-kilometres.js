/**
 * Метод, що повертає фідформатованe значення властивості value об'єкта sameObject у локалі uk-UA
 * @param sameObject Об'єкт, властивість якого потребує фільтрації
*/
export function selectedValueKilometres(sameObject) {
   return new Intl.NumberFormat('uk-UA').format(sameObject.value)
}