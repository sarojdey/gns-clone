function GlitchText({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center">
      <p className="glitch text-3xl md:text-5xl font-bold uppercase tracking-[.5rem]">
        <span aria-hidden="true">{children}</span>
        {children}
        <span aria-hidden="true">{children}</span>
      </p>
    </div>
  );
}

export default GlitchText;
