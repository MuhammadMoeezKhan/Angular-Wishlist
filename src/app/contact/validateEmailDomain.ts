import { AbstractControl, ValidationErrors } from "@angular/forms";

export function validateEmailDomain(control : AbstractControl): ValidationErrors | null{
	const invalidHosts = ['@gmail.com','@yahoo.com']
	const fieldValue = control?.value;

	if (!fieldValue) return null;

	const anyMatches = invalidHosts.some((host) => {return fieldValue.indexOf('@${host}') > -1});
	
	return anyMatches ? { validateEmailDomain : true } : null;
}