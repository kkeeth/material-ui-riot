import "@riotjs/hot-reload";
import { register } from "riot";

import "./plugins/preprocessor";
import "./plugins/bound";
import "./plugins/collection";
import "./plugins/content";
import "./plugins/dynamicAttributes";
import "./plugins/riotHelpers";
import "./plugins/validate";

import MuiButton from "./material-elements/material-button/material-button.riot";
// require("./material-elements/material-card/material-card.riot");
import MuiCheckbox from "./material-elements/material-checkbox/material-checkbox.riot";
// require("./material-elements/material-combo/material-combo.riot");
// require("./material-elements/material-dropdown/material-dropdown.riot");
// require("./material-elements/material-dropdown-list/material-dropdown-list.riot");
// require("./material-elements/material-input/material-input.riot");
// require("./material-elements/material-navbar/material-navbar.riot");
// require("./material-elements/material-pane/material-pane.riot");
// require("./material-elements/material-popup/material-popup.riot");
// require("./material-elements/material-snackbar/material-snackbar.riot");
// require("./material-elements/material-spinner/material-spinner.riot");
// require("./material-elements/material-tabs/material-tabs.riot");
// require("./material-elements/material-textarea/material-textarea.riot");
// require("./material-elements/material-waves/material-waves.riot");
// require("./material-elements/material-footer/material-footer.riot");

// require("./material-elements/material-button/material-button.scss");
// require("./material-elements/material-card/material-card.scss");
// require("./material-elements/material-checkbox/material-checkbox.scss");
// require("./material-elements/material-combo/material-combo.scss");
// require("./material-elements/material-dropdown/material-dropdown.scss");
// require("./material-elements/material-dropdown-list/material-dropdown-list.scss");
// require("./material-elements/material-input/material-input.scss");
// require("./material-elements/material-navbar/material-navbar.scss");
// require("./material-elements/material-pane/material-pane.scss");
// require("./material-elements/material-popup/material-popup.scss");
// require("./material-elements/material-snackbar/material-snackbar.scss");
// require("./material-elements/material-spinner/material-spinner.scss");
// require("./material-elements/material-tabs/material-tabs.scss");
// require("./material-elements/material-textarea/material-textarea.scss");
// require("./material-elements/material-waves/material-waves.scss");
// require("./material-elements/material-footer/material-footer.scss");

register("material-checkbox", MuiCheckbox);
register("material-button", MuiButton);
