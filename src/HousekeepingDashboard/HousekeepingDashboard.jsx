import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import AvaliableTasks from './nestedPages/AvaliableTasks';
import ScheduleTask from './nestedPages/ScheduleTask';
import RoomInventory from './nestedPages/RoomsPage';
import { useNavigate } from 'react-router-dom';

const NAVIGATION = [

  {
    kind: 'header',
    title: 'Analytics',
  },
  {
    segment: 'roommanagement',
    title: 'Room Management',
    icon: <BarChartIcon />,

  },
  {
    segment: 'tasks',
    title: 'Tasks',
    icon: <BarChartIcon />,
    children: [
      {
        segment: 'scheduletasks',
        title: 'ScheduleTasks',
        icon: <DescriptionIcon />,
      },
      {
        segment: 'avaliabletasks',
        title: 'Avaliable Tasks',
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'User',
  },
  {
    segment: 'logout',
    title: 'Logout',
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    const params = {}
    const pathParts = pathname.split('/')
    if (pathParts[1] === "roommanagement" && pathParts[2] === "rooms") {
      params.id = pathParts[3]
    }
    return {
      pathname,
      params,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

const Skeleton = styled('div')(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function HousekeepingDashboard(props) {
  const { window, children,handleLogout } = props;

  const router = useDemoRouter('/roommanagement');
  const navigate = useNavigate()


  // Map routes to components
  const renderPage = () => {
    switch (router.pathname) {

      case '/tasks':
        return <AvaliableTasks router={router} />;
      case '/tasks/scheduletasks':
        return <ScheduleTask router={router} />;
      case '/tasks/avaliabletasks':
        return <AvaliableTasks router={router} />;
      case '/roommanagement':
        return <RoomInventory router={router} />;
      case `/roommanagement/rooms/${router.params.id}`:
        return <RoomStatusUpdatePage router={router} />;
      case '/logout':
        return handleLogout();
      default:
        return <div>Page Not Found</div>;
    }
  };

  // Remove this const when copying and pasting into your project.
  const demoWindow = window ? window() : undefined;

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      // theme={demoTheme}
      window={demoWindow}
      branding={{
        logo:  <img src="../../public/assets/img/logo.png" alt="LixuryStay logo" />,
        title: '',
        homeUrl:"roommanagement"
      }}
    >
      <DashboardLayout  >
        <PageContainer >
          {renderPage()}
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}