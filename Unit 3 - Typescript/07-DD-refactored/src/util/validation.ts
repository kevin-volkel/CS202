//* Validation
export interface Validatable{
  value: string | number;
  maxLength?: number;
  minLength?: number;
  required?: boolean;
  max?: number,
  min?: number,
}

export function validate(input: Validatable) {
  let isValid = true;
  if(input.required) {
    isValid = isValid && input.value.toString().trim().length !== 0;
  } 
  if (input.minLength != null && typeof input.value === 'string') {
    isValid = isValid && input.value.length >= input.minLength
  }
  if (input.maxLength != null && typeof input.value === 'string') {
    isValid = isValid && input.value.length <= input.maxLength
  }
  if (input.max != null && typeof input.value === 'number') {
    isValid = isValid && input.value <= input.max
  }
  if (input.min != null && typeof input.value === 'number') {
    isValid = isValid && input.value >= input.min
  }
  return isValid;
}