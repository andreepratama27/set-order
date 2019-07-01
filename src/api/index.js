export default class Api {
  static login() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });
  }
}
