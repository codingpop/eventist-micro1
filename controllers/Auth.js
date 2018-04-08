export default class Auth {
  static async signUp(req, res, next) {
    res.send('Here');
  }

  static async signIn(req, res, next) {
    res.send('Also here');
  }
}
