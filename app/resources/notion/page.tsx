export const metadata = {
  title: "Notion template",
  description: "Duplicate the notion board we built for flight delays.",
};

const NOTION_URL = "https://www.notion.so/templates";

export default function NotionPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16 text-slate-800">
      <p className="text-sm uppercase tracking-wide text-slate-400">Resources</p>
      <h1 className="mt-2 text-4xl font-semibold text-slate-900">Duplicate the Notion tracker</h1>
      <p className="mt-4 text-base text-slate-600">
        Use Notion to collect documents, receipts, and screenshots in one shareable link (handy when partners ask for supporting files).
      </p>
      <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">Steps</p>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-base text-slate-700">
          <li>Open the template.</li>
          <li>Click <strong>Duplicate</strong> in the top-right corner.</li>
          <li>Add one page per journey and tick off evidence as you gather it.</li>
        </ol>
        <a
          href={NOTION_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
        >
          Open the template
        </a>
      </div>
    </main>
  );
}
