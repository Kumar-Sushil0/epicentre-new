import Header from "../components/Header";
import Footer from "../components/Footer";
import StoriesCard from "../components/stories/StoriesCard";
import { blogCategories } from "../content/blogs";


const allPosts = blogCategories.flatMap((cat) => cat.stories);

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-earth-900 text-earth-100">
      <Header />
      <div className="w-full px-4 md:px-16 pt-32 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allPosts.map((post, index) => (
            <StoriesCard key={index} {...post} />
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
