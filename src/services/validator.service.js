/**
 * Validates if the value is empty.
 *
 * @param value
 * @return {undefined | string}
 */
export const required = (value) => (value ? undefined : 'Required');

/**
 * Validates if the value matches a particular value.
 * @param comparableField
 */
export const match = (comparableField) => (value, values) =>
	value !== values[comparableField] ? `Must match the field '${comparableField}'` : undefined;

/**
 * Validates the maximal length of the value.
 * Usage: const maxLength15 = maxLength(15)
 *
 * @param max
 * @return {undefined | string}
 */
export const maxLength = (max) => (value) =>
	value && value.length > max ? `Must be ${max} or fewer characters` : undefined;

/**
 * Validates the minimal length of the value.
 * Usage: export const minLength2 = minLength(2)
 *
 * @param min
 * @return {undefined | string}
 */
export const minLength = (min) => (value) =>
	value && value.length < min ? `Must be ${min} or more characters` : undefined;

/**
 * Validates if the value is a number.
 *
 * @param value
 * @return {undefined | string}
 */
// tslint:disable-next-line: variable-name
export const number = (value) => (value && isNaN(Number(value)) ? 'Must be a number' : undefined);

/**
 * Validates if the value is a string.
 *
 * @param value
 * @return {undefined | string}
 */
// tslint:disable-next-line: variable-name
export const string = (value) =>
	value && !(typeof value === 'string' || value instanceof String) ? 'Must be a string' : undefined;

/**
 * Validates the minimal value.
 * Usage: export const minValue18 = minValue(18);
 *
 * @param min
 * @return {undefined | string}
 */
export const minValue = (min) => (value) => (value && value < min ? `Must be at least ${min}` : undefined);

/**
 * Validates the email.
 *
 * @param value
 * @return {undefined | string}
 */
export const email = (value) =>
	value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

/**
 * Validates if the value is alpha-numeric.
 *
 * @param value
 * @return {undefined | string}
 */
export const alphaNumeric = (value) =>
	value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined;

/**
 * Validates the phone number.
 *
 * @param value
 * @return {undefined | string}
 */
export const phoneNumber = (value) =>
	value && !/^\d{10}$/i.test(value) ? 'Invalid phone number: It must consist of 10 digits' : undefined;

/**
 * to validate the portal -> sourse 'portal'
 * @param sourse
 */
export const portalPartyCheck = (comparableField) => (value, values) =>
	['portal', 'third-party'].includes(values[comparableField]) && !value ? 'Required' : undefined;

/**
 * for multi-select drop down
 * @param sourse
 */
export const multiSelect = (value) => !value.length ? 'Required' : undefined;

/**
 * Validates the input object according to the input schema.
 *
 * @param object
 * @param schema
 * @return object with errors
 */
export const validate = (object, schema) => {
	const errors = {};
	const validateFormInner = (values, innerSchema, collector) => {
		Object.keys(innerSchema)
			.filter(v => v in innerSchema)
			.forEach(v => {
				const s = innerSchema[v];

				if (Array.isArray(s)) {
					s.forEach(validator => {
						const result = validator(values[v], values);
						if (result) {
							collector[v] = result;
						}
					});
				} else {
					validateFormInner(values[v], innerSchema[v], collector);
				}
			});

		return collector;
	};

	const collectedErrors = validateFormInner(object, schema, errors);
	return Object.keys(collectedErrors).length ? collectedErrors : undefined;
};
