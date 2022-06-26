/* eslint-disable no-undef */
import React from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { iRouterItem } from '../interfaces/interfaces';
// import { loadRobotsAction } from '../reducers/robots/robot.action.creators';
// import { RobotHttpStore } from '../services/robot.http.store';

export function App() {
    // const dispatcher = useDispatch();
    // const apiRobots = useMemo(() => new RobotHttpStore(), []);

    // useEffect(() => {
    //     apiRobots
    //         .getAllRobots()
    //         .then((robots) => dispatcher(loadRobotsAction(robots)));
    // }, [apiRobots, dispatcher]);

    const HomePage = React.lazy(() => import('../pages/home'));
    const DetailsPage = React.lazy(() => import('../pages/details'));
    const CreatePage = React.lazy(() => import('../pages/create'));

    const routerOptions: iRouterItem[] = [
        { path: '/', label: 'Home - Robots', page: <HomePage /> },
        { path: '/details/:id', label: 'Robot', page: <DetailsPage />,
        },
        { path: '/create', label: 'Create Robot', page: <CreatePage />,
        },
        { path: '*', label: '', page: <HomePage />,
        },
    ];
    return (
        <Layout navOptions={routerOptions}>
            <React.Suspense>
                <Routes>
                    {routerOptions.map((item) => (
                        <Route
                            key={item.label}
                            path={item.path}
                            element={item.page}
                        ></Route>
                    ))}
                </Routes>
            </React.Suspense>
        </Layout>
    );
}
