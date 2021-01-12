import { FormGroup } from "@angular/forms";

export function PasswordCheck(
  controlName: string,
  CompareControlName: string,
) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[controlName];
    const confirmPassword = formGroup.controls[CompareControlName];

    if (password.value !== confirmPassword.value) {
      confirmPassword.setErrors({ mustmatch: true });
    } else {
      confirmPassword.setErrors(null);
    }
  };
}