import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-dusk-blue-500/30 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-5 text-xs text-dusk-blue-700 sm:flex-row sm:px-8">
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
        <p className="font-mono">
          Built with Next.js, Tailwind CSS and a lot of{" "}
          <span className="text-tropical-teal-500">Compound Engineering</span>
        </p>
      </div>
    </footer>
  );
}
