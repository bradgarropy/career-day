/**
 * The known-good prompt for the live AI demo.
 *
 * Practice this with opencode 3x before the presentation.
 * If output varies, refine the prompt until consistent.
 */
export const MAGIC_8_BALL_PROMPT = `Build a Magic 8-Ball at app/routes/demo.tsx for our React Router 7 app.

Show a big black circle with a white "8" in the middle of the screen. When clicked, it should shake briefly using motion (the motion package is installed), then reveal a random fun answer from this list inside the 8-ball:

- "Definitely!"
- "Ask your teacher!"
- "Yes!!!"
- "Without a doubt!"
- "Maybe try again"
- "Of course!"
- "Try later!"
- "100%!"

Use Cloudflare orange (#F6821F) for any accent text. Make all text huge and kid-friendly. Add a big "Ask again" button below the ball. Add a small back link to "/" at the top.`;
