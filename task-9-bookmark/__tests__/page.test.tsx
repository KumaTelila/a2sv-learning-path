// Import the necessary libraries
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../app/page'; 
import { describe, it } from 'node:test';
import MainPage from '@/app/components/jobs/MainPage';

// Describe the test suite for the Home component
describe('Home Component', () => {
  // Define an individual test
  it('renders MainPage correctly', () => {
    // Render the Home component
    render(<MainPage/>);

    // Replace 'Expected Text from MainPage' with actual text from MainPage component
    // Verify if the MainPage component renders specific text
    expect(screen.getByText('Expected Text from MainPage')).toBeInTheDocument();
  });
});
