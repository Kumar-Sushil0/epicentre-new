const whatsappNumber = '919890322494';
const whatsappMessage = encodeURIComponent('Hey I find this interesting i would like to know more');
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

export default function RequestConversation() {
  return (
    <section className="py-8 px-4 md:px-16 bg-earth-950">
      <div className="text-center">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-lg font-normal text-gold-500 hover:text-gold-400 hover:border-gold-400 transition-colors cursor-pointer border-2 border-gold-500 rounded-lg px-6 py-2"
          style={{ fontFamily: 'Outfit, sans-serif' }}
        >
          Request Conversation
        </a>
      </div>
    </section>
  );
}
