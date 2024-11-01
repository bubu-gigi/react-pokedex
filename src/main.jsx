import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Homepage from 'src/routes/Homepage.jsx';
import TeamPage from 'src/routes/TeamPage.jsx';
import PokemonPage from './routes/PokemonPage';
import NotFoundPage from './routes/NotFoundPage';

import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Homepage />,
		errorElement: <NotFoundPage />,
	},
	{
		path: '/team',
		element: <TeamPage />,
	},
	{
		path: '/pokemon/:pokemonName',
		element: <PokemonPage />
	}
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
