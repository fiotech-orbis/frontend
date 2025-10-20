import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const store = await cookies();
  const cookieLocale = store.get("locale")?.value;

  // Default to Vietnamese if no cookie is set
  const locale = cookieLocale || "vi";

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
