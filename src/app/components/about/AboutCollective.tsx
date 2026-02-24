'use client';

export default function AboutCollective() {
  const handleDownload = () => {
    // Create a simple PDF-like content
    const pdfContent = `
      THE SILENT CLUB
      
      Foundational Document
      
      This document represents The Silent Club's core principles and values.
      
      © ${new Date().getFullYear()} The Silent Club
    `;
    
    // Create a blob with the content
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    
    // Create a temporary link and trigger download
    const link = document.createElement('a');
    link.href = url;
    link.download = 'The_Silent_Club_Foundation.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="py-16 bg-earth-900 border-b border-earth-800" id="collective">
      <div className="w-full px-4 md:px-16">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="w-full lg:flex-1 text-center">
            <h3 className="text-3xl font-normal mb-6 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
              BIGवन — A Case for Silent Tourism
            </h3>
            <p className="text-xl text-earth-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
              Silence is cognitive infrastructure. Infrastructure deserves protection.<br />
              If sovereignty begins with attention, landscapes that protect attention are public goods.<br />
              Development can preserve authority — if designed deliberately.
            </p>
          </div>

          {/* Right Side - Image and Download Card */}
          <div className="w-full lg:w-auto flex flex-col items-center gap-8 lg:flex-shrink-0">
            <div className="w-full max-w-xs">
              <img 
                src="/silent.svg" 
                alt="Silent Tourism" 
                className="w-full h-auto"
              />
            </div>
            <div className="border border-earth-700/50 rounded-lg overflow-hidden p-6 bg-earth-800/30 w-full max-w-md">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 w-full text-lg font-normal text-gold-500 hover:text-gold-400 transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                <span>Download the foundational document.</span>
                <span className="material-symbols-outlined text-2xl">download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}