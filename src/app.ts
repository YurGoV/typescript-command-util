import { DirExecuter } from './commands/dir/dir.executor';
import { FfmpegExecutor } from './commands/ffmpeg/ffmpeg.executor';

import { ConsoleLogger } from './out/console-logger/console-logger';

export class App {
  run(): void {
    new FfmpegExecutor(ConsoleLogger.getInstance()).execute();
    // new DirExecuter(ConsoleLogger.getInstance()).execute();
  }
}

const app = new App();

app.run();
