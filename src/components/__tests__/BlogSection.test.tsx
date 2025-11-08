import { render, screen } from '@testing-library/react';
import { BlogSection } from '../blog-section';
import { blogPosts } from '@/lib/data';

describe('BlogSection', () => {
  it('renders all blog post titles and excerpts', () => {
    render(<BlogSection />);

    blogPosts.forEach(post => {
      expect(screen.getByText(post.title)).toBeInTheDocument();
      expect(screen.getByText(post.excerpt)).toBeInTheDocument();
    });
  });
});
