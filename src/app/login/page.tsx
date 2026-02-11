
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LoginPage() {
  return (
    <main>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-earth-900">
        <LoginForm />
      </div>
      <Footer />
    </main>
  );
}
