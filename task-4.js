class User {
  userEmail; // Rename to avoid naming conflict

  constructor(email) {
    this.userEmail = email;
  }

  get email() {
    return this.userEmail;
  }

  set email(newEmail) {
    this.userEmail = newEmail;
  }
}

class Admin extends User {
  static blacklistedEmails = [];
  static role = {
    BASIC: "basic",
    SUPERUSER: "superuser",
  };

  constructor({ email, access }) {
    super(email);
    this.access = access;
  }

  static blacklist(email) {
    Admin.blacklistedEmails.push(email); // Corrected typo here
  }

  static isBlacklisted(email) {
    return Admin.blacklistedEmails.includes(email);
  }
}

// Testing the corrected code
const mango = new Admin({
  email: "mango@mail.com",
  access: Admin.role.SUPERUSER,
});

console.log(mango.email); // Output: "mango@mail.com"
console.log(mango.access); // Output: "superuser"

Admin.blacklist("poly@mail.com");
console.log(Admin.blacklistedEmails); // Output: ["poly@mail.com"]
console.log(Admin.isBlacklisted("mango@mail.com")); // Output: false
console.log(Admin.isBlacklisted("poly@mail.com")); // Output: true
