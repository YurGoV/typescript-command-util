import { ChildProcessWithoutNullStreams } from 'child_process';
import { ISteramLogger } from './stream-logger.interface';

export class StreamHandler {
  constructor(private logger: ISteramLogger) {}

  processOutput(stream: ChildProcessWithoutNullStreams): void {
    stream.stdout.on('data', (data: any) => {
      this.logger.log(data);
    });

    stream.stderr.on('data', (data: any) => {
      this.logger.error(data);
    });

    stream.on('close', () => {
      this.logger.end();
    });
  }
}
