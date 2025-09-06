export default function Navbar() {
  return (
    <div className="fixed w-full z-20 top-0 left-0">
      <div className="h-4 bg-gradient-to-b from-sky-500 via-sky-400 to-sky-200"></div>
      <div className="flex items-center justify-between h-16 px-12 bg-slate-200 rounded-xs">
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <h1>Right side</h1>
        </div>
      </div>
    </div>
  );
}
