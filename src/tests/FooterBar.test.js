import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import FooterBar from '../components/FooterBar';

describe('FooterBar Component', () => {
    test('renders all footer links with correct href attributes', () => {
      render(<FooterBar />);
  
      // Check personal website link
      const links = screen.queryAllByRole('link');
      expect(links).toHaveLength(3); // Expecting exactly 3 links
  
      const websiteLink = links.find(link => link.getAttribute('href') === 'markohanesian.com');
      expect(websiteLink).toBeInTheDocument();
  
      const githubLink = links.find(link => link.getAttribute('href') === 'https://github.com/markohanesian/social-media-app');
      expect(githubLink).toBeInTheDocument();
  
      const emailLink = links.find(link => link.getAttribute('href') === 'mailto:mso872@gmail.com');
      expect(emailLink).toBeInTheDocument();
    });
  });
