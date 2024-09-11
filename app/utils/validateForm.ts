type ValidationOptions = {
  equal?: unknown;
  different?: unknown;
  regex?: RegExp | boolean;
  includes?: unknown[] | boolean;
};

/**
 * Object MUST have null values accepted per each param
 * @param objectStructure Object to validate
 * @param validations Validation options, see type for more info.
 */
function abstractValidator<T extends object>(
  objectStructure: T,
  validations: Record<keyof T, ValidationOptions>
): Partial<Record<keyof T, Partial<ValidationOptions>>> {
  const validationResponse: Partial<
    Record<keyof T, Partial<ValidationOptions>>
  > = {};

  for (const key in validations) {
    // Initialize validation response for this key
    validationResponse[key] = {
      equal: true,
      different: true,
      regex: true,
      includes: true,
    };

    const validationOptions = validations[key];
    const objectValue = objectStructure[key];

    // Handle each validation rule
    if (validationOptions.equal !== undefined) {
      if (objectValue !== validationOptions.equal) {
        validationResponse[key]!.equal = false;
      }
    }

    if (validationOptions.different !== undefined) {
      if (objectValue === validationOptions.different) {
        validationResponse[key]!.different = false;
      }
    }

    if (
      validationOptions.regex !== undefined &&
      typeof objectValue === "string"
    ) {
      if (!(validationOptions.regex as RegExp).test(objectValue)) {
        validationResponse[key]!.regex = false;
      }
    }

    if (
      validationOptions.includes !== undefined &&
      Array.isArray(validationOptions.includes)
    ) {
      if (!validationOptions.includes.includes(objectValue)) {
        validationResponse[key]!.includes = false;
      }
    }

    // Clean up if no validation failed
    if (Object.keys(validationResponse[key]!).length === 0) {
      delete validationResponse[key]; // Remove if all validations pass
    }
  }

  return validationResponse;
}

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
/**
 * At least 8 characters
 * At least 1 mayus
 * At least 1 special character
 */
const strongPasswordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

type LoginObject = {
  email: string | null;
  password: string | null;
};

export const validateLoginForm = (loginObject: LoginObject): LoginObject => {
  const response: LoginObject = {
    email: null,
    password: null,
  };
  const validationOptions: Record<keyof LoginObject, ValidationOptions> = {
    email: {
      regex: emailRegex,
    },
    password: {
      regex: strongPasswordRegex,
    },
  };
  const validations = abstractValidator(loginObject, validationOptions);
  if (!validations.email?.regex && loginObject.email) {
    response.email = "Invalid email";
  }
  if (!validations.password?.regex && loginObject.password) {
    response.password = "Invalid password";
  }
  return response;
};

type RegisterObject = {
  email: string | null;
  repeatpassword: string | null;
  password: string | null;
};

export const validateRegisterForm = (
  regObject: RegisterObject
): RegisterObject => {
  const response: RegisterObject = {
    email: null,
    repeatpassword: null,
    password: null,
  };
  const validationOptions: Record<keyof RegisterObject, ValidationOptions> = {
    email: {
      regex: emailRegex,
    },
    repeatpassword: {
      regex: strongPasswordRegex,
      equal: regObject.password,
    },
    password: {
      regex: strongPasswordRegex,
    },
  };

  const validations = abstractValidator(regObject, validationOptions);
  if (!validations.email?.regex && regObject.email) {
    response.email = "Invalid email";
  }
  if (!validations.password?.regex && regObject.password) {
    response.password = "Password not strong enough";
  }
  if (!validations.repeatpassword?.regex && regObject.repeatpassword) {
    response.repeatpassword = "Password not strong enough";
  }
  if (!validations.repeatpassword?.equal && regObject.repeatpassword) {
    response.repeatpassword = "Passwords are not the same";
  }
  console.log(response);
  return response;
};
