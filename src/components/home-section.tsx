import Image from 'next/image';
import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { profile } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from './ui/button';

export function HomeSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden py-20">
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-background">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-primary/20 opacity-50 blur-[80px]"></div>
      </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
            <div className="flex flex-col items-center gap-6">
                <Avatar className="w-32 h-32 border-4 border-primary/50 shadow-lg">
                    <AvatarImage src={profile.profilePicture.imageUrl} alt={profile.name} data-ai-hint={profile.profilePicture.imageHint} />
                    <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-foreground via-primary to-primary-foreground">
                    {profile.name}
                </h1>
                <p className="max-w-2xl text-lg md:text-xl text-foreground/80">
                    {profile.role}
                </p>
                <p className="max-w-3xl text-base text-foreground/60">
                    {profile.bio}
                </p>
                <div className="flex items-center gap-4 mt-4">
                    <Button asChild size="lg">
                        <Link href="#contact">Get in Touch</Link>
                    </Button>
                    <Button variant="secondary" asChild size="lg">
                        <Link href="#projects">View My Work</Link>
                    </Button>
                </div>
                <div className="flex items-center gap-6 mt-6">
                    <Link href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="GitHub">
                        <Github className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="LinkedIn">
                        <Linkedin className="h-6 w-6" />
                    </Link>
                    <Link href="#" className="text-foreground/60 hover:text-primary transition-colors" aria-label="Twitter">
                        <Twitter className="h-6 w-6" />
                    </Link>
                </div>
            </div>
        </div>
    </section>
  );
}
