export class ServiceError extends Error {
	constructor(message) {
		super(message);
		this.message = message;
	}
}

export class BadRequestException extends ServiceError {
	constructor(message) {
		super(message);
	}
}

export class UnauthorizedException extends ServiceError {
	constructor(message) {
		super(message);
	}
}

export class NotFoundException extends ServiceError {
	constructor(message) {
		super(message);
	}
}

export class InternalServerErrorException extends ServiceError {
	constructor(message) {
		super(message);
	}
}
