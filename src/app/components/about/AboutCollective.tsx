'use client';

import Image from 'next/image';

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
    <section className="py-20 bg-earth-900 border-b border-earth-800" id="collective">
      <div className="w-full px-4 md:px-16">
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-left flex flex-col justify-center">
            <h3
              className="text-3xl md:text-4xl font-normal mb-6 text-gold-500"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              BIGवन — A Case for Silent Tourism
            </h3>
            <div className="space-y-3 text-earth-300 text-base md:text-lg font-body max-w-xl">
              <p>Silence is cognitive infrastructure.</p>
              <p>As attention becomes scarce, environments that protect it become essential.</p>
              <p>Modern tourism amplifies stimulation. Silent tourism reduces it.</p>
              <p>The Silent Club operates as a pilot model.</p>
              <p>
                The Silent Tourism Foundation documents and open-sources this architecture so it can be
                replicated independently.
              </p>
              <p className="font-semibold text-earth-100">Designed deliberately. Built to endure.</p>
            </div>
          </div>

          {/* Right Side - Image and Download Card */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-between h-full">
            <Image
              src="/silent.svg"
              alt="BIGवन - Silent Tourism logo and initiative"
              width={120}
              height={120}
              className="w-100 h-auto"
            />
            <div className="border border-earth-700/50 rounded-lg overflow-hidden p-6 bg-earth-800/40 w-full max-w-sm">
              <button
                onClick={handleDownload}
                className="flex items-center justify-center gap-3 w-full text-base md:text-lg font-normal text-gold-500 hover:text-gold-400 transition-colors"
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                <span>Download the foundational document</span>
                <span className="material-symbols-outlined text-2xl">download</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}