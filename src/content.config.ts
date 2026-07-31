import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const countryMetadata = {
  AR: { country: 'Argentina', continent: 'Sud America' },
  IS: { country: 'Islanda', continent: 'Europa' },
  CA: { country: 'Canada', continent: 'Nord America' },
} as const;

const travels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/travels' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string().min(1),
        slug: z
          .string()
          .regex(
            /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
            'Lo slug deve contenere solo lettere minuscole, numeri e trattini',
          ),
        country: z.string().min(1),
        countryCode: z.enum(['AR', 'IS', 'CA']),
        continent: z.string().min(1),
        featured: z.boolean(),
        subtitle: z.string().min(1),
        summary: z.string().min(1),
        cover: image(),
        coverAlt: z.string().min(1),
        published: z.boolean(),
        year: z.number().int().optional(),
        startDate: z.coerce.date().optional(),
        endDate: z.coerce.date().optional(),
        duration: z.string().min(1).optional(),
        locations: z.array(z.string().min(1)).optional(),
        personalNote: z.string().min(1).optional(),
        reflection: z.string().min(1).optional(),
      })
      .superRefine((travel, context) => {
        const expected = countryMetadata[travel.countryCode];

        if (travel.country !== expected.country) {
          context.addIssue({
            code: 'custom',
            path: ['country'],
            message: `Il codice ${travel.countryCode} richiede il Paese ${expected.country}`,
          });
        }

        if (travel.continent !== expected.continent) {
          context.addIssue({
            code: 'custom',
            path: ['continent'],
            message: `Il codice ${travel.countryCode} richiede il continente ${expected.continent}`,
          });
        }
      }),
});

export const collections = { travels };
