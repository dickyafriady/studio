import { render, screen } from '@testing-library/react';
import { HomeSection } from '../home-section';
import { profile } from '@/lib/data';

jest.mock('lucide-react');

describe('HomeSection', () => {
  it('renders the profile information', () => {
    render(<HomeSection />);

    expect(screen.getByText(profile.name)).toBeInTheDocument();
    expect(screen.getByText(profile.role)).toBeInTheDocument();
    expect(screen.getByText(profile.bio)).toBeInTheDocument();
  });
});
