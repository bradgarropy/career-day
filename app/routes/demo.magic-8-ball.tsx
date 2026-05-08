/**
 * 🤖 LIVE AI DEMO TARGET
 *
 * This is the stub. During the presentation, opencode will replace this file
 * with a working Magic 8-Ball implementation.
 *
 * If the AI demo fails, fallback:
 *   Navigate to /demo/magic-8-ball/backup in the browser.
 */

export default function Magic8BallStub() {
  return (
    <main className="h-screen grid place-content-center text-center gap-8 p-8">
      <h1 className="text-[5rem] font-extrabold">AI is building this... 🪄</h1>
      <p className="text-2xl opacity-70">
        (if it totally screws up,{" "}
        <a href="/demo/magic-8-ball/backup" className="underline font-bold">
          click here
        </a>{" "}
        to see a working version)
      </p>
      <a href="/" className="text-xl text-[#f6821f] font-bold">
        ← back
      </a>
    </main>
  );
}
