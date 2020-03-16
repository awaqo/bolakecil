import I18n from 'react-native-i18n';
import * as RNLocalize from 'react-native-localize';

import id from "./locales/id";
import en from "./locales/en";

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
  I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.translations = {
  id,
  en
};

export default I18n;