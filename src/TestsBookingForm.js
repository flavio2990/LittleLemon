
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';
import { initializeTimes } from './BookingForm';
import { updateTimes } from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Reserve your Table");
    expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes', () => {
    it('should return an array of times based on the given date', () => {
      const date = new Date('2023-05-15');
      const expectedTimes = [
        '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
        '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
        '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'
      ];
      expect(initializeTimes(date)).toEqual(expectedTimes);
    });
  });

  describe('updateTimes', () => {
    it('should return the same value as the provided state', () => {
      const state = {
        selectedDate: new Date('2023-05-15'),
        availableTimes: [
          '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM',
          '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
          '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM'
        ]
      };
      expect(updateTimes(state)).toEqual(state.availableTimes);
    });
  });