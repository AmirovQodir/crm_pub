import { Navigate, RouteObject } from "react-router-dom";
import { ROUTE_CLINICS, ROUTE_COORDINATORS, ROUTE_CREATE, ROUTE_DASHBOARD, ROUTE_HOME, ROUTE_LOGIN, ROUTE_PATIENTS, ROUTE_SOURCES } from "../common/constants";
import { DashboardBase } from "../layouts";
import { Patients } from "../pages/patients";
import { HomePage } from "../pages/home-page";
import { LoginForm } from "../features/auth/components/login-form/LoginForm";
import { Clinics } from "../pages/clinics";
import { Sources } from "../pages/sources";
import { Coordinators } from "../pages/coordinators";
import { Patient } from "../pages/patient";
import { Clinic } from "../pages/clinic";
import { Coordinator } from "../pages/coordinator";
import { Source } from "../pages/source";

export const routes = (pathname: string): RouteObject[] => {
    return [
        {
            path: ROUTE_HOME,
            caseSensitive: true,
            element: <HomePage/>,
            children: [
                {
                    path: ROUTE_LOGIN,
                    element: <LoginForm/>
                }
            ]
        },
        {
            path: ROUTE_DASHBOARD,
            element: <DashboardBase/>,
            caseSensitive: true,
            children: [
                {
                    path: ROUTE_DASHBOARD,
                    element: <Navigate to={`${ROUTE_DASHBOARD}/${ROUTE_PATIENTS}`} replace/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_PATIENTS}`,
                    element: <Patients/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_PATIENTS}/${ROUTE_CREATE}`,
                    element: <Patient/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_PATIENTS}/:id`,
                    element: <Patient/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_CLINICS}`,
                    element: <Clinics/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_CLINICS}/${ROUTE_CREATE}`,
                    element: <Clinic/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_CLINICS}/:id`,
                    element: <Clinic/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_SOURCES}`,
                    element: <Sources/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_SOURCES}/${ROUTE_CREATE}`,
                    element: <Source/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_SOURCES}/:id`,
                    element: <Source/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_COORDINATORS}`,
                    element: <Coordinators/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_COORDINATORS}/${ROUTE_CREATE}`,
                    element: <Coordinator/>
                },
                {
                    path: `${ROUTE_DASHBOARD}/${ROUTE_COORDINATORS}/:id`,
                    element: <Coordinator/>
                }
            ]
        }
    ];
}