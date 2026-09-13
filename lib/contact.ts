// Shared by the client contact form and the server contact page (client modules cannot export plain values to server components).
export const CONTACT_TOPICS = ['automation', 'financial', 'ap', 'legal', 'tourism', 'turbohub', 'other'] as const;

export type ContactTopic = (typeof CONTACT_TOPICS)[number];

export function isContactTopic(value: unknown): value is ContactTopic {
  return typeof value === 'string' && (CONTACT_TOPICS as readonly string[]).includes(value);
}
