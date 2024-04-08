export interface ISteramLogger {
  log(...args: any[]): void;
  end(): void;
  error(...args: any[]): void;
}
