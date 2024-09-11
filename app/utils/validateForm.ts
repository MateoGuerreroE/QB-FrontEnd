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
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    password: {
      regex:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
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
