export const api = async () => {
 try {
  let resultado = await fetch(
   "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
  );
  resultado = await resultado.json();
  if (resultado.length > 0) {
   return resultado[0];
  }
  return null;
 } catch (error) {
  return null;
 }
};
