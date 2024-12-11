import type Messages from "./messages/fr";

declare global {
  // Use type safe message keys with `next-intl`
  type IntlMessages = Messages;
}
