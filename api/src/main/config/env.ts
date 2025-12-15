export class Env {
  private static instance: Env;

  private constructor(private readonly port: number = 3000) {}

  static getInstance() {
    if (!Env.instance) Env.instance = new Env();
    return Env.instance;
  }

  static get port() {
    return Env.getInstance().port;
  }
}
