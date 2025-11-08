import { render, screen } from '@testing-library/react';
import { ProjectsSection } from '../projects-section';
import { projects } from '@/lib/data';

jest.mock('lucide-react');

describe('ProjectsSection', () => {
  it('renders all project titles and descriptions', () => {
    render(<ProjectsSection />);

    projects.forEach(project => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();
    });
  });
});
