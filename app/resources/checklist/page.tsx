export const metadata = {
  title: "Delay Compensation Checklist",
  description: "Printable checklist to organise everything airlines need to see.",
};

export default function ChecklistPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl px-6 py-16 text-slate-800">
      <p className="text-sm uppercase tracking-wide text-slate-400">Resources</p>
      <h1 className="mt-2 text-4xl font-semibold text-slate-900">Delay compensation checklist</h1>
      <p className="mt-4 text-base text-slate-600">
        Copy this page or print it out. Tick the boxes before you hit submit with any claims partner.
      </p>
      <ol className="mt-8 space-y-6 text-sm leading-6">
        <li>
          <strong>Booking reference</strong> – include screenshots of the airline app + the PDF eticket.
        </li>
        <li>
          <strong>Flight details</strong> – departure, arrival, flight number, scheduled vs actual times. Screenshot the airline status page.
        </li>
        <li>
          <strong>Cause of delay</strong> – note what gate agents/crew said. If it was knock-on, mention the inbound flight number if possible.
        </li>
        <li>
          <strong>Receipts</strong> – food, hotels, transport. Keep originals plus phone photos.
        </li>
        <li>
          <strong>Passengers</strong> – list every traveller on the same booking with DOB + contact info.
        </li>
        <li>
          <strong>Communication log</strong> – dates you contacted the airline and any ticket numbers they gave you.
        </li>
      </ol>
      <p className="mt-10 text-sm text-slate-500">
        Want an editable workspace? <a className="text-slate-900 underline" href="/resources/notion" rel="noreferrer">Duplicate the Notion template</a> and drop everything in one place.
      </p>
    </main>
  );
}
