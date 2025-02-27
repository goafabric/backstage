import { createTemplateAction } from '@backstage/plugin-scaffolder-node';
import fs from 'fs';
import path from 'path';
import archiver from 'archiver';

export function createZipAction() {
  return createTemplateAction<{ inputPath: string; outputPath: string }>({
    id: 'custom:zip',
    schema: {
      input: {
        required: ['outputPath'],
        type: 'object',
        properties: {
          inputPath: {
            type: 'string',
            description: 'Path to the directory to be zipped',
          },
          outputPath: {
            type: 'string',
            description: 'Path where the ZIP file should be saved',
          },
        },
      },
    },
    async handler(ctx) {
      const { inputPath, outputPath } = ctx.input;
      const absInputPath = ctx.workspacePath;
      const absOutputPath = outputPath

      ctx.logger.info(`Creating ZIP from ${absInputPath} to ${absOutputPath}`);

      return new Promise<void>((resolve, reject) => {
        const output = fs.createWriteStream(absOutputPath);
        const archive = archiver('zip', { zlib: { level: 9 } });

        output.on('close', () => {
          ctx.logger.info(`ZIP file created: ${absOutputPath} (${archive.pointer()} bytes)`);
          resolve();
        });

        archive.on('error', (err) => reject(err));

        archive.pipe(output);
        archive.directory(absInputPath, false);
        archive.finalize();
      });
    },
  });
}
