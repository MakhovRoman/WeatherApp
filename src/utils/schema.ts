import { z } from 'zod';

export const cityDTO = z.object({
  title: z.string().regex(new RegExp(/^([a-zA-Z\u0080-\u024F]+(?:. |-| |'))*[a-zA-Z\u0080-\u024F]*$/)),
})
