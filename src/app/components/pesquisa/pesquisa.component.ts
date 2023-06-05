import { Component } from '@angular/core';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css']
})
export class PesquisaComponent {

  // ngOnInit(): void {
  //   const alertRedInput: string = "#8C1010";
  //   const defaultInput: string = "rgba(10, 180, 180, 1)";

  //   function userNameValidation(usernameInput: string): void {
  //     const username = document.getElementById("username") as HTMLInputElement;
  //     const issueArr: string[] = [];
  //     if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
  //       issueArr.push("No special characters!");
  //     }
  //     if (issueArr.length > 0) {
  //       username.setCustomValidity(issueArr.join("\n"));
  //       username.style.borderColor = alertRedInput;
  //     } else {
  //       username.setCustomValidity("");
  //       username.style.borderColor = defaultInput;
  //     }
  //   }

  //   function passwordValidation(passwordInput: string): void {
  //     const password = document.getElementById("password") as HTMLInputElement;
  //     const issueArr: string[] = [];
  //     if (!/^.{7,15}$/.test(passwordInput)) {
  //       issueArr.push("Password must be between 7-15 characters.");
  //     }
  //     if (!/\d/.test(passwordInput)) {
  //       issueArr.push("Must contain at least one number.");
  //     }
  //     if (!/[a-z]/.test(passwordInput)) {
  //       issueArr.push("Must contain a lowercase letter.");
  //     }
  //     if (!/[A-Z]/.test(passwordInput)) {
  //       issueArr.push("Must contain an uppercase letter.");
  //     }
  //     if (issueArr.length > 0) {
  //       password.setCustomValidity(issueArr.join("\n"));
  //       password.style.borderColor = alertRedInput;
  //     } else {
  //       password.setCustomValidity("");
  //       password.style.borderColor = defaultInput;
  //     }
  //   }
  // }


}
