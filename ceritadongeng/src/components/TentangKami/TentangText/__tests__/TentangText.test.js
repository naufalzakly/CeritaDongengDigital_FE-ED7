import React from 'react';
import { render, screen, within } from '@testing-library/react';
import TentangText from '../index';
import '@testing-library/jest-dom/extend-expect';

describe('TentangText', () => {
  test('render correctly', async () => {
    render(<TentangText />);
    const setting = screen.getByText(
      'Rendahnya minat baca anak Indonesia di tengah tingginya angka melek huruf merupakan latar belakang kami mengembangkan project Website OEPPAK Dongeng ini. Website OEPPAK Dongeng diharapkan dapat merangsang minat, kegemaran, dan rasa ingin tahu anak-anak terhadap kesusastraan. Website OEPPAK Dongeng diharapkan pula dapat memberikan perasaan menyenangkan kepada anak saat membaca karena pada website ini cerita dongeng disajikan secara interaktif dengan audio.'
    );
    expect(setting).toBeInTheDocument();
  });
});
