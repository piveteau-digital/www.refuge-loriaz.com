"use server";

import { getMessages } from "next-intl/server";

export default async function getClientMessages(locale: string) {
  return await getMessages({ locale });
}
