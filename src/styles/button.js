import * as Colors from "styles/colors";

const btn = {
  borderRadius: 4,
  backgroundColor: Colors.light
};

module.exports = {
  btnDefault: {
    ...btn
  },
  btnPrimary: {
    ...btn,
    backgroundColor: Colors.warning
  }
};
