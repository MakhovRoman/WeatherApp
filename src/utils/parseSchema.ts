import { z } from 'zod';

const SHCEMA_ERROR_MESSAGE = "Schema response is not valid";

export const parseSchema = (schema: ReturnType<typeof z.object>, data: unknown) => {
  try {
    const result = schema.parse(data);

    return result;
  } catch {
    console.log(SHCEMA_ERROR_MESSAGE);
  }
}
