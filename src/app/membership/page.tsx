import Header from "../components/Header";
import Footer from "../components/Footer";
import Breadcrumb from "../components/Breadcrumb";
import MembershipServicesOffering from "../components/MembershipServicesOffering";

const breadcrumbItems = [
  { label: "Membership", href: "/membership" }
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-earth-900 text-earth-100">
      <Header />
      <Breadcrumb items={breadcrumbItems} />


      {/* Services Offering Component */}
      <MembershipServicesOffering />

      <Footer />
    </main>
  );
}
