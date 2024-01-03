import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactFbq from '../src/index';

ReactFbq.initialize({id: 'pixel_code_id', args: ['dataProcessingOptions', ['LDU'], 0, 0]});
ReactFbq.pageView();
ReactFbq.track({title: 'title', data: 'data' });

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
  <div>
    <h1>React Facebook Pixel Testing</h1>
    <button
      type="button"
      onClick={() =>
        ReactFbq.track({title: 'Car', data: {
          name: 'Honda Civic',
          model: 'Sedan',
          price: '$19999.00',
          year: 2019
        }})
      }
    >
      Track View Content
    </button>
  </div>
);