

export default function Footer() {
  return (
    <footer className="bg-[#010409] border-t border-slate-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
        <p>© 2026 Shasank Traders. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0 font-medium">
          <a href="#home" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#home" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">Support Desk</a>
        </div>
      </div>
    </footer>
  );
}