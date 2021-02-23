//test react components as the props change
import React from 'react';
import { render, screen } from '@testing-library/react';

import Episodes from './Episodes';

const data = [
    {
        id: 1,
        url: "url1",
        name: "Episode 1",
        season: 1,
        number: 1,
        summary: "Ep_Summary_1",
        runtime: 1,
        image: { medium: "ep1_med_image", }
    },
    {
        id: 2,
        url: "url2",
        name: "Episode 2",
        season: 1,
        number: 2,
        summary: "Ep_Summary_2",
        runtime: 2,
        image: { medium: "ep2_med_image", }
    }
];

test("renders without errors", () => {
    const { rerender } = render(<Episodes episodes={[]} />)
    expect(screen.queryByText(/Ep_Summary_1/i)).toBeNull();

    rerender(<Episodes episodes={data} />)
    expect(screen.getByText(/Ep_Summary_1/i)).toBeInTheDocument();

    const episodes = screen.queryAllByTestId('test-episodes');
    expect(episodes).toHaveLength(2);
});