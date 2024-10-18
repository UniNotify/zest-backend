import pino from 'pino';
import { config } from '../configs';

export const logger = pino({
	level: config.log.level,
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: config.log.color,
			translateTime: 'SYS:standard',
		},
	},
});

export const customLogger = (message: string, ...rest: string[]) => {
	logger.info(message, ...rest);
};
