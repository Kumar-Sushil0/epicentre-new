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
        <div className="text-center mb-12">
          <h3 className="text-3xl font-normal mb-4 text-gold-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
            BIGवन — A Case for Silent Tourism
          </h3>
          <p className="text-xl text-earth-300" style={{ fontFamily: 'Outfit, sans-serif' }}>
            A non-profit research and advocacy effort to formalize silence as a legitimate economic and environmental model. <br/> Development does not have to mean density.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="border border-earth-700/50 rounded-lg overflow-hidden p-6 bg-earth-800/30 max-w-md w-full">
            <button
              onClick={handleDownload}
              className="flex items-center justify-center gap-3 w-full text-lg font-normal text-gold-500 hover:text-gold-400 transition-colors"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              <span>Download Foundational Document</span>
              <span className="material-symbols-outlined text-2xl">download</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}