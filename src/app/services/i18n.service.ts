import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class I18nService {
  constructor() {}

  private static _availableLanguages = ["en", "nl"];
  private static _defaultLanguage = I18nService._availableLanguages.includes(
    navigator.language
  )
    ? navigator.language
    : "nl";
  private static _language = I18nService._defaultLanguage;
  public static getLocale = () =>
    navigator.language.search("en") > -1
      ? "en"
      : navigator.language.search("nl") > -1
      ? "nl"
      : "";

  public static setLanguage = (lang?: string) =>
    (I18nService._language = lang || I18nService._defaultLanguage);

  public static getSelectedLanguage = () => I18nService._language;

  public static get = (key: string) => {
    const langOb = key
      .split(".")
      .reduce(
        (ob: { [index: string]: any }, key) => ob[key] || "--",
        I18nService._TOKENS
      );
    return langOb[I18nService.getSelectedLanguage()] || "--";
  };

  private static _TOKENS: {} = {
    ADMIN: {
      TITLE: { en: "Settings", nl: "Instellingen" },
      ADDRESS: {
        TITLE: { en: "Address", nl: "Adres" },
        NAME_INITIALS: { en: "Initials", nl: "Initialen" },
        NAME_INFIX: {
          en: "Infix",
          nl: "Tussenvoegsel"
        },
        NAME_LASTNAME: { en: "Surname", nl: "Achternaam" },
        ADDRESS: { en: "Address", nl: "Adres" },
        ZIPCODE: { en: "Postalcode", nl: "Postcode" },
        CITY: { en: "City", nl: "Stad" },
        COUNTRY: { en: "Country", nl: "Land" }
      },
      REGISTRATIONS: {
        TITLE: { en: "Registrations", nl: "Registraties" },
        COC_NUMBER: { en: "CoC nr", nl: "KvK nr" },
        VAT_NUMBER: { en: "VAT nr", nl: "BTW nr" }
      },
      DELIVERYCONDITIONS: {
        TITLE: {
          en: "Deliveryconditions",
          nl: "Leveringsvoorwaarden"
        }
      }
    },
    INVOICES: {
      TITLE: { en: "Invoices", nl: "Facturen" },
      TABLE: {
        HEADER_DATE: { en: "Date", nl: "Datum" },
        HEADER_CLIENT: { en: "Client", nl: "Klant" },
        HEADER_SUM: { en: "Sum", nl: "Bedrag" },
        HEADER_STATUS: { en: "Status", nl: "Status" }
      },
      BUTTONS: {
        NEW_INVOICE: { en: "New", nl: "Nieuw" },
        CLEAR: { en: "Clear", nl: "Formulier leegmaken" }
      }
    },
    INVOICE: {
      TITLE: { en: "Invoice", nl: "Factuur" },
      INPUT_INVOICE_DATE: { en: "Invoice date", nl: "Factuur datum" },
      INPUT_COMPANY: { en: "Company", nl: "Bedrijf" },
      INPUT_PERIOD: { en: "Invoice period", nl: "factuur periode" },
      INPUT_PERIOD_FROM: { en: "From", nl: "Van" },
      INPUT_PERIOD_TO: { en: "To", nl: "Tot" },
      INPUT_SERVICES: { en: "Services delivered", nl: "Geleverde diensten" },
      INPUT_RATE: { en: "Rate/hour", nl: "Tarief / uur" },
      INPUT_HOURS: { en: "Hours", nl: "Uren" },
      INPUT_TAX: { en: "VAT", nl: "BTW" },
      TOTAL: { en: "Total", nl: "Totaal" },
      BUTTONS: {
        NEW_COMPANY: { en: "New company", nl: "Nieuw bedrijf" },
        DELETE: { en: "Delete", nl: "Verwijder" },
        SAVE: { en: "Save", nl: "Bewaar" }
      }
    },
    SIGN_IN: {
      TITLE: { en: "Sign in iFactuur", nl: "Log in iFactuur" },
      INPUT_EMAIL: { en: "Email", nl: "E-mail" },
      INPUT_PASSWORD: { en: "Password", nl: "Wachtwoord" },
      ALERT_ALREADY_SIGNED_IN: {
        en: "You are already signed in",
        nl: "U bent al ingelogd"
      }
    },
    BUTTONS: { SAVE: { en: "Save", nl: "Bewaar" } }
  };
}
