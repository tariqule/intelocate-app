import { NativeModules, Platform } from "react-native";

export function getLanguage(): string {
  let systemLanguage = "en";
  if (Platform.OS === "android") {
    systemLanguage = NativeModules.I18nManager.localeIdentifier;
  } else {
    systemLanguage = NativeModules.SettingsManager.settings.AppleLocale || "en";
  }
  return systemLanguage.substring(0, 2);
}
