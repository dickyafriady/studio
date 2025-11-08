import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 md:py-32 bg-accent/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">My Projects</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-foreground/60">
                        Here are some of the things I've built.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card key={project.title} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border-none bg-background flex flex-col">
                            <CardHeader className="p-0">
                                <div className="overflow-hidden">
                                    <Image
                                        src={project.image.imageUrl}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                                        data-ai-hint={project.image.imageHint}
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow">
                                <CardTitle className="text-xl font-semibold mb-2">{project.title}</CardTitle>
                                <p className="text-foreground/70 mb-4 min-h-[48px]">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="p-6 pt-0">
                                <Button asChild variant="link" className="p-0 h-auto">
                                    <Link href={project.link} className="flex items-center gap-2">
                                        View Project <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
