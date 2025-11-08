import Link from 'next/link';
import { blogPosts } from '@/lib/data';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function BlogSection() {
    return (
        <section id="blog" className="py-20 md:py-32 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">From My Blog</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
                        Thoughts on technology, design, and everything in between.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <Link href={post.link} key={post.title} className="block group">
                            <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 border-none bg-accent/50">
                                <CardHeader>
                                    <CardTitle className="text-lg font-semibold group-hover:text-primary transition-colors">{post.title}</CardTitle>
                                </CardHeader>
                                <CardDescription className="px-6 text-foreground/70 flex-grow">
                                    {post.excerpt}
                                </CardDescription>
                                <CardFooter className="mt-4 px-6 pb-6">
                                    <p className="text-sm text-foreground/50">{post.date}</p>
                                </CardFooter>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
