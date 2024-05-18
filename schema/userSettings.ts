import { Currencies } from "@/lib/currency";
import { z } from "zod";

export const UpdateUserCurrencySchema = z.object({
  currency: z.custom((value) => {
    const found = Currencies.some((c) => c.value === value);
    if (!found) {
      throw new Error(`${value}은(는) 유효하지 않은 화폐단위 입니다.`);
    }

    return value;
  }),
});
