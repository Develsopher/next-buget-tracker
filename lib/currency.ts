export const Currencies = [
  { value: "KRW", label: "₩ Won", locale: "ko-KR" },
  { value: "USD", label: "$ Dollar", locale: "en-US" },
  { value: "JPY", label: "¥ Yen", locale: "ja-JP" },
];

export type Currency = (typeof Currencies)[0];
