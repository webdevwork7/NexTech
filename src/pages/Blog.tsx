
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Software Development",
    excerpt: "Exploring how artificial intelligence is revolutionizing the way we build and deploy software solutions.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    author: "Sarah Kim",
    date: "2024-01-15",
    readTime: "8 min read",
    tags: ["AI/ML", "Development", "Future Tech"],
    category: "Technology"
  },
  {
    id: 2,
    title: "Building Scalable Cloud Architecture",
    excerpt: "Best practices for designing and implementing cloud-native applications that can grow with your business.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80",
    author: "Marcus Johnson",
    date: "2024-01-10",
    readTime: "12 min read",
    tags: ["Cloud", "Architecture", "DevOps"],
    category: "Cloud Computing"
  },
  {
    id: 3,
    title: "Cybersecurity in the Modern Workplace",
    excerpt: "Essential security measures every business should implement to protect their digital assets.",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&q=80",
    author: "Alex Thompson",
    date: "2024-01-05",
    readTime: "6 min read",
    tags: ["Security", "Business", "Best Practices"],
    category: "Security"
  },
  {
    id: 4,
    title: "UX Design Trends for 2024",
    excerpt: "The latest design trends and principles that are shaping user experiences in modern applications.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    author: "Priya Patel",
    date: "2024-01-01",
    readTime: "10 min read",
    tags: ["UX Design", "Trends", "User Experience"],
    category: "Design"
  },
  {
    id: 5,
    title: "Microservices vs Monolithic Architecture",
    excerpt: "A comprehensive comparison to help you choose the right architectural approach for your project.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&q=80",
    author: "Sarah Kim",
    date: "2023-12-28",
    readTime: "15 min read",
    tags: ["Architecture", "Microservices", "Development"],
    category: "Architecture"
  },
  {
    id: 6,
    title: "Mobile App Development Best Practices",
    excerpt: "Key strategies for building successful mobile applications that users love and businesses value.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    author: "Marcus Johnson",
    date: "2023-12-20",
    readTime: "9 min read",
    tags: ["Mobile", "Development", "Best Practices"],
    category: "Mobile Development"
  }
];

const categories = ["All", "Technology", "Cloud Computing", "Security", "Design", "Architecture", "Mobile Development"];

const Blog = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Stay up-to-date with the latest trends, insights, and best practices in technology, 
              software development, and digital innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16">
        <div className="container-padding">
          <Card className="glass-effect border-white/10 overflow-hidden animate-fade-in">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs px-3 py-1 bg-primary text-white rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              
              <CardContent className="p-8 flex flex-col justify-center">
                <div className="flex items-center text-sm text-muted-foreground mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {blogPosts[0].date}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
                
                <h2 className="text-3xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                  {blogPosts[0].title}
                </h2>
                
                <p className="text-muted-foreground mb-6 text-lg">
                  {blogPosts[0].excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {blogPosts[0].tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-xs px-2 py-1 bg-primary/20 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">
                    By {blogPosts[0].author}
                  </div>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="section-padding">
        <div className="container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <Card 
                key={post.id}
                className="group glass-effect border-white/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="text-xs px-2 py-1 bg-black/50 text-white rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center text-xs text-muted-foreground mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                    <Clock className="w-3 h-3 ml-3 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2 py-1 bg-white/10 text-muted-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      By {post.author}
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container-padding">
          <div className="text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to get the latest insights, tutorials, and industry news delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
