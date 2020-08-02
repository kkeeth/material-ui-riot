import { install } from "riot";

export default class ValidateMixin {
  get base() {
    return {
      email: /^(([\w\.\-_]+)@[\w\-\_]+(\.\w+){1,}|)$/i,
      number: /^(\d+|)$/i,
      tel: /^((\+|\d)?([\d\-\(\)\#])|)+$/i,
      url: /([--:\w?@%&+~#=]*\.[a-z]{2,4}\/{0,2})((?:[?&](?:\w+)=(?:\w+))+|[--:\w?@%&+~#=]+)?/i,
    };
  }
  init() {
    if (!this.props)
      console.debug(
        "Sorry, but for using validate mixin you should add following code in your component: this.props = props;"
      );
    if (this.props && this.props.valid) {
      this.validationType =
        typeof this[this.props.valid] == "function" ? "Function" : "Regexp";
      if (this.validationType === "Regexp") {
        try {
          this.validationRegexp = eval(this.props.valid);
        } catch (e) {
          throw new Error(
            `Something wrong with your regular expression!. Checkout --- ${e}`
          );
        }
      }
      if (this.validationType === "Function") {
        this.validationFunction = this[this.props.valid] || false;
      }
    } else if (
      this.props &&
      Object.keys(this.base).indexOf(this.props.type) != -1
    ) {
      this.validationType = "Type";
    }
  }
  validate(value) {
    if (this.validationType) {
      return this["validateBy" + this.validationType](value);
    }
    return null;
  }
  validateByFunction(value) {
    if (this.validationFunction) {
      return this.validationFunction(value);
    }
  }
  validateByRegexp(value) {
    if (this.validationRegexp) {
      return this.validationRegexp.test(value);
    }
  }
  validateByType(value) {
    return this.base[this.props.type].test(value);
  }
}

install((component) => {
  component.validate = ValidateMixin;

  return component;
});
