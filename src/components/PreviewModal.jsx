function PreviewModal({ title, body, closeLabel, onClose }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-glow">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-200/70">{title}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
          >
            {closeLabel}
          </button>
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-300">{body}</p>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-400/30 hover:bg-white/10"
          >
            {closeLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PreviewModal;
