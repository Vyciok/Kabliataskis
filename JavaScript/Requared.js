const validate = new window.JustValidate("#form");
validate
  .addField(
    "#name",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Name is too short",
      },
      {
        rule: "maxLength",
        value: 14,
        errorMessage: "Name is too long",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#name-errors",
    }
  )
  .addField(
    "#email",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
      {
        rule: "email",
        errorMessage: "Please use a valid email address",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#email-errors",
    }
  )
  .addField(
    "#company_name",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#company-errors",
    }
  )
  .addField(
    "#title",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#title-errors",
    }
  )
  .addField(
    "#mesage",
    [
      {
        rule: "required",
        errorMessage: "This field is required",
      },
    ],
    {
      errorFieldCssClass: "error-field",
      errorLabelCssClass: "error-label",
      errorsContainer: "#mesage-errors",
    }
  );
